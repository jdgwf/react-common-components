import * as React from 'react';
import CheckboxField from './CheckboxField';

export default class ImageUpload extends React.Component<IFormSaveButtonsProps, IFormSaveButtonsState> {

    constructor( props: IFormSaveButtonsProps ) {
        super( props);

    }

    render() {

    if( this.props.readOnly ) {
        if( this.props.hasImage ) {
            return (
                <div className="text-center">
                    <h4>{this.props.label}</h4>
                    <img src={this.props.imageURL} />
                </div>
            )
            } else {
                return <></>
        }
    }
        return (
<fieldset className="fieldset">
    <legend>{this.props.label}</legend>
    <div className="small-text">{this.props.children}</div>
    <div className="text-center">
        {this.props.hasImage ? (
            <img src={this.props.imageURL} />
        ) : (
            <img src="/images/no-image-selected.png" />
        )}
    </div>

    <label>
        Upload a JPEG, JPG, or PNG image:&nbsp;
        <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={(e) => this.props.selectFile( e, this.props.name )}
        />
    </label>

    <CheckboxField
        onChange={() => this.props.toggleClearImage( this.props.name ) }
        checked={this.props.clearImages.indexOf( this.props.name) > -1}
        label="Clear Image on Save"
    >
        To clear the image above, just replace it with another image or check this box to remove the image.
    </CheckboxField>

</fieldset>
        )
    }
}

interface IFormSaveButtonsProps {
    hasImage: boolean;
    imageURL: string;
    name: string;
    label: string;
    readOnly?: boolean;
    clearImages: string[];
    toggleClearImage( imageName: string):void;
    selectFile(event: React.FormEvent<HTMLInputElement>, imageName: string): void
}

interface IFormSaveButtonsState {
}