<template>
    <div>
        <div></div>
    </div>
</template>

<script>
import { isIdcard, isMobile, isNumber } from '../source/index.js'

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

<style lang="scss" scoped></style>
