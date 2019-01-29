<template>
    <div></div>
</template>

<script>
// import * as xiaogou from '../dist/bai-util.umd.js'
import { isIdcard, isMobile, isNumber } from 'bai-util'
// import * as xiaogou from '../source/index.js'
// const xiaogou = require('../dist/bai-util.umd.js')

export default {
    name: 'Validate',
    created() {},
    methods: {
        isIdcard() {
            return isIdcard()
        },
        isMobile() {
            return isMobile()
        },
        isNumber() {
            return isNumber()
        },
    },
}
</script>

<style lang="scss" scoped>
.a {
}
</style>
