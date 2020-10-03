import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default class CheckboxField extends React.Component<ICheckboxFieldProps, ICheckboxFieldState> {

    constructor( props: ICheckboxFieldProps ) {
        super( props);

    }

    render() {
        return (
            <label className={this.props.className}>
{this.props.readOnly ? (
    <div title={this.props.checked ? "Is" : "Is NOT"}>
    {this.props.checked ? (
        <FontAwesomeIcon icon={faCheckCircle} className="color-green" />
    ) : (
        <FontAwesomeIcon icon={faTimesCircle} className="color-red" />
    )}&nbsp;<strong>{this.props.label}</strong>
    </div>
) : (<>

                <input
                    type="checkbox"
                    name={this.props.name}
                    onChange={this.props.onChange}
                    checked={this.props.checked}
                    autoFocus={this.props.autoFocus}
                    className={this.props.inputClassName}
                />&nbsp;<strong>{this.props.label}</strong>
                {this.props.instructions ? (
                    <div className="small-text">{this.props.instructions}</div>
                ) : ( <></> )}
</> )}
                {this.props.children ? (
                    <div className="small-text">
                        {this.props.children}
                    </div>
                ) : ( <></> )}

            </label>

        )
    }
}

interface ICheckboxFieldProps {
    label: string;
    onChange( event: React.FormEvent<HTMLInputElement>): void
    checked: boolean;
    name?: string;
    instructions?: string;
    className?: string;
    inputClassName?: string;
    autoFocus?: boolean;
    readOnly?: boolean;

}

interface ICheckboxFieldState {
}