import * as React from 'react';

export default class NumericInputField extends React.Component<INumericInputFieldProps, INumericInputFieldState> {
    constructor( props: INumericInputFieldProps ) {
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

                <input
                    type="number"
                    name={this.props.name}
                    autoFocus={this.props.autoFocus}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    max={this.props.max}
                    min={this.props.min}
                    step={this.props.step}
                    readOnly={this.props.readOnly}
                    placeholder={this.props.placeholder}
                    className={"full-width " + this.props.inputClassName}
                />
            </label>

        )
    }
}

interface INumericInputFieldProps {
    label: string;
    onChange( event: React.FormEvent<HTMLInputElement>): void
    value: number;
    instructions?: string;
    name?: string;
    className?: string;
    inputClassName?: string;
    autoFocus?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    max?: number;
    step?: number;
    min?: number;

}

interface INumericInputFieldState {
}