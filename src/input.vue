<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
            @change="$emit('change')"
        >
        <template v-if="error">
            <g-icon name="setting"></g-icon>
            <span>{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        components:{
            'g-icon':Icon
        },
        name: "input",
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,.5);
    $red: #F1453D;
    .wrapper {
        font-size:$font-size;
        display: inline-block;
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            font-size: inherit;
            padding: 0 8px;
            &:hover {
                border-color:$border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: $red;
            }
        }
    }
</style>