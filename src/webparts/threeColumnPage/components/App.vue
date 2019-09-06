<template>
  <div id="ThreeColumnPage">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

export interface IThreeColumnPageProps {
    description: string;
}

@Component
export default class ThreeColumnPage extends Vue implements IThreeColumnPageProps {

    @Prop()
    public description: string;

}
</script>

<style lang="scss" module>

</style>