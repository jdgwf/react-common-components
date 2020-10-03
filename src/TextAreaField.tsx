import * as React from 'react';

export default class TextAreaField extends React.Component<ITextAreaFieldProps, ITextAreaFieldState> {

    constructor( props: ITextAreaFieldProps ) {
        super( props);

    }

    render() {
        return (
            <label className={this.props.className}>
                <strong>{this.props.label}</strong>:<br />
                {this.props.instructions ? (
                    <div className="small-text">{this.props.instructions}</div>
                ) : ( <></> )}

                {this.props.children ? (
                    <div className="small-text">
                        {this.props.children}
                    </div>
                ) : ( <></> )}

                <textarea
                    name={this.props.name}
                    onChange={this.props.onChange}
                    autoFocus={this.props.autoFocus}
                    value={this.props.value}
                    readOnly={this.props.readOnly}
                    className={"full-width " + this.props.inputClassName}
                    placeholder={this.props.placeholder}
                />
            </label>

        )
    }
}

interface ITextAreaFieldProps {
    label: string;
    onChange( event: React.FormEvent<HTMLTextAreaElement>): void
    value: string;
    instructions?: string;
    name?: string;
    className?: string;
    inputClassName?: string;
    autoFocus?: boolean;
    placeholder?: string;
    readOnly?: boolean;

}

interface ITextAreaFieldState {
}