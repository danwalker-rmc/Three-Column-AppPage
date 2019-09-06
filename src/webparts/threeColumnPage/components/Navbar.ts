import { Component, Vue } from 'vue-property-decorator';
import WithRender from './navbar.html';

@WithRender
@Component
export default class Navbar extends Vue {
    public searchinput: string = '';

}