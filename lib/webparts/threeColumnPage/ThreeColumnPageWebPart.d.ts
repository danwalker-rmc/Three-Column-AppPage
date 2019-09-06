import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IThreeColumnPageWebPartProps {
    description: string;
}
export default class ThreeColumnPageWebPart extends BaseClientSideWebPart<IThreeColumnPageWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ThreeColumnPageWebPart.d.ts.map