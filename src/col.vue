<template>
    <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]"
         :style="{paddingLeft: gutter/2+'px',paddingRight: gutter/2+'px'}"
         >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluCol",
        props: {
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            }
        },
        data(){
            return {
                gutter: 0
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height:100px;
        background: grey;
        width: 50%;
        border: 1px solid red;
        $class-prefix: col-;
        @for $n from 1 through 100 {
            &.#{$class-prefix}#{$n} {
                width: ($n /100)* 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 100 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n /100)* 100%;
            }
        }
    }

</style>