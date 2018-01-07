<template>
    <div>
        <h1>{{ title }}</h1>
        <el-row :gutter="20">
            <el-select v-model="limit" placeholder="Select">
                <el-option v-for="limit in limits" :key="limit.value" :label="limit.label" :value="limit.value"></el-option>
            </el-select>
            <el-select v-model="interval" placeholder="Select">
                <el-option v-for="interval in intervals" :key="interval.value" :label="interval.label" :value="interval.value"></el-option>
            </el-select>
        </el-row>
        <br>
        <el-row :gutter="20">
            <el-col :span="24">
                <div class="grid-content">
                    <el-table :data="cryptos" :default-sort = "{prop: 'rank', order: 'ascending'}" stripe border highlight-current-row>
                        <div slot="empty">
                            <h2>Loading...</h2>
                        </div>
                        <el-table-column prop="rank" label="#" align="center" width="56" sortable></el-table-column>
                        <el-table-column prop="symbol" label="Symbol" align="center" width="100" sortable></el-table-column>
                        <el-table-column label="Name" align="left" width="140">
                            <template slot-scope="scope">
                                <a :href="'https://coinmarketcap.com/currencies/' + scope.row.id" target="_blank">{{ scope.row.name }}</a>
                            </template>
                        </el-table-column>
                        <el-table-column prop="price_usd" label="Price (USD)" align="left" width="130" :formatter="format_price" sortable></el-table-column>
                        <el-table-column prop="market_cap_usd" label="Market Cap" align="left" width="170" :formatter="format_money_cell" sortable></el-table-column>
                        <el-table-column prop="total_supply" label="Circulating Supply" align="left" :formatter="format_supply" sortable></el-table-column>
                        <el-table-column prop="percent_change_7d" label="Change (7d)" align="left" width="140" :formatter="format_percent" sortable>
                            <template slot-scope="scope">
                                <span v-bind:class="( is_positive(scope.row.percent_change_7d) ) ? 'positive' : 'negative'">{{ scope.row.percent_change_7d }}%</span>
                            </template>                             
                        </el-table-column>
                        <el-table-column prop="percent_change_24h" label="Change (24h)" align="left" width="140" :formatter="format_percent" sortable>
                            <template slot-scope="scope">
                                <span v-bind:class="( is_positive(scope.row.percent_change_24h) ) ? 'positive' : 'negative'">{{ scope.row.percent_change_24h }}%</span>
                            </template>     
                        </el-table-column>
                        <el-table-column prop="percent_change_1h" label="Change (1h)" align="left" width="140" sortable>
                            <template slot-scope="scope">
                                <span v-bind:class="( is_positive(scope.row.percent_change_1h) ) ? 'positive' : 'negative'">{{ scope.row.percent_change_1h }}%</span>
                            </template>                         
                        </el-table-column>
                    </el-table>
                    <span v-if="last_updated" class="last_updated">Last updated on {{ last_updated }} from <a href="https://coinmarketcap.com" target="_blank">coinmarketcap.com</a>.</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            title: 'CryptoTrends Beta',
            endpoint: 'https://api.coinmarketcap.com/v1/ticker/?limit=',
            cryptos: [],
            timer: null,
            interval: 30000,
            intervals: [
                {
                    'label': 'Every 10 seconds',
                    'value': 1000
                },
                {
                    'label': 'Every 30 seconds',
                    'value': 3000
                },
                {
                    'label': 'Every 1 minute',
                    'value': 6000
                },
                {
                    'label': 'Every 2 minutes',
                    'value': 12000
                },
                {
                    'label': 'Every 5 minutes',
                    'value': 30000
                }
            ],
            limit: 10,
            limits: [
                {
                    'label': 'Top 10',
                    'value': 10
                },
                {
                    'label': 'Top 100',
                    'value': 100
                }
            ],
            last_updated: null
        }
    },
    created: function () {
        this.fetch_cryptos()
        this.timer = setInterval(() => {
            this.fetch_cryptos()
        }, this.interval)
    },
    watch: {
        limit: function () {
            $this.refresh_cryptos();
        },
        interval: function () {
            $this.refresh_cryptos();
        }
    },
    methods: {
        fetch_cryptos: function () {
            fetch(this.endpoint + this.limit).then(response => {
                return response.json()
            }).then(data => {
                let cryptos = data.map((c, index) => {
                    c.rank = parseInt(c.rank);
                    ['24h_volume_usd', 'available_supply', 'market_cap_usd', 'max_supply', 'percent_change_1h', 'percent_change_24h', 'percent_change_7d', 'price_btc', 'price_usd', 'rank', 'total_supply'].forEach(value => {
                        c[value] = parseFloat(c[value])
                    })
                    return c
                })
                this.cryptos = cryptos
                this.last_updated = this.get_date()
            })
        },
        refresh_cryptos: function () {
            this.fetch_cryptos()
            clearInterval(this.timer)
            this.timer = setInterval(() => {
                this.fetch_cryptos()
            }, this.interval)            
        },
        get_date () {
            let today = new Date()
            let dd = today.getDate()
            let mm = today.getMonth() + 1
            let yyyy = today.getFullYear()
            let hh = today.getHours()
            let m = today.getMinutes()
            let ss = today.getSeconds()

            if (dd < 10) {
                dd = '0' + dd
            }

            if (m < 10) {
                m = '0' + m
            }

            if (hh < 10) {
                hh = '0' + hh
            }

            if (ss < 10) {
                ss = '0' + ss
            }

            let months = {
                1: 'Jan',
                2: 'Feb',
                3: 'Mar',
                4: 'Apr',
                5: 'May',
                6: 'Jun',
                7: 'Jul',
                8: 'Aug',
                9: 'Sep',
                10: 'Oct',
                11: 'Nov',
                12: 'Dec'
            }

            let month = months[mm]

            today = month + ' ' + dd + ', ' + yyyy + ' ' + hh + ':' + m + ':' + ss
            return today
        },
        format_price (row, column) {
            let price = parseFloat(row[column.property].toFixed(6))
            let s = price.toString()
            if (s.indexOf('.') !== -1) {
                return s.split('.')[1].length === 1 ? '$' + (s + '0') : '$' + price
            } else {
                return '$' + price
            }
        },
        format_money_cell (row, column) {
            return this.format_money(row[column.property])
        },
        format_money (money) {
            let fraction = 2
            if (money.toString().indexOf('.') === -1) {
                fraction = 0
            }
            let formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: fraction
            })
            return formatter.format(money)
        },
        format_number (number) {
            let fraction = 2
            if (number.toString().indexOf('.') === -1) {
                fraction = 0
            }
            let formatter = new Intl.NumberFormat('en-US', {
                currency: 'USD',
                minimumFractionDigits: fraction
            })
            return formatter.format(number)
        },
        format_percent (row, column) {
            if (row[column.property] === 0) {
                return '<span>' + row[column.property] + '</span>'
            } else if (row[column.property] > 0) {
                return '<span class="positive">' + row[column.property] + '</span>'
            } else {
                return '<span class="negative">' + row[column.property] + '</span>'
            }
        },
        is_positive (num) {
            if (num > 0) {
                return true
            } else {
                return false
            }
        },
        format_supply (row, column) {
            return this.format_number(row[column.property]) + ' ' + row.symbol
        }
    }
}
</script>

<style scoped>
    table {
        margin-bottom: 100px;
    }
    .last_updated {
        color: #A1A1A1;
        margin-top: 10px;
        display: inline-block;
        font-size: 12px;
    }
    .last_updated a { color: #A1A1A1; }
    .positive { color: #29B129; }
    .negative { color: #D64040; }
</style>