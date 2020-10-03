import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export default class InputField extends React.Component<IInputFieldProps, IInputFieldState> {
    type: string = "text";
    autofill: boolean = false;
    constructor( props: IInputFieldProps ) {
        super( props);

        this.state = {
            showAutocomplete: false,
        }
        if( this.props.type ) {
            this.type = this.props.type;
        }

        if( typeof(this.props.autofill) != "undefined" ) {
            this.autofill = this.props.autofill;
        }
        this.setValue = this.setValue.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    toggleDropDown( event: React.FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.setState({
            showAutocomplete: !this.state.showAutocomplete,
        })
    }

    setValue( newValue: string ) {
        let event = {
            currentTarget: {
                value: newValue,
            }
        }
        this.setState({
            showAutocomplete: false,
        })
        this.props.onChange( event as React.FormEvent<HTMLInputElement> );
    }

    onChange( event: React.FormEvent<HTMLInputElement> ) {

        this.props.onChange( event as React.FormEvent<HTMLInputElement> );
    }

    render() {

        if( this.props.noLabel ) {
            return (
                <div>
                    {this.props.instructions ? (
                        <div className="small-text">{this.props.instructions}</div>
                    ) : ( <></> )}

                    {this.props.children ? (
                        <div className="small-text">
                            {this.props.children}
                        </div>
                    ) : ( <></> )}
                <div className={"position-relative " + this.props.className}>

                        {this.props.autoComplete && this.props.autoComplete.length > 0 ? (
                            <>
                                {this.state.showAutocomplete ? (
                                    <button
                                        type="button"
                                        onClick={this.toggleDropDown}
                                        title="Close List"
                                        className="btn btn-primary btn-sm abs-right"
                                    >
                                        <FontAwesomeIcon icon={faAngleDoubleUp} />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={this.toggleDropDown}
                                        title="Open List"
                                        className="btn btn-primary btn-sm abs-right"
                                    >
                                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                                    </button>
                                )}
                            </>
                        ) : (
                            <></>
                        )}
                    <input
                        type={this.type}
                        name={this.props.name}
                        autoFocus={this.props.autoFocus}
                        onChange={this.onChange}
                        value={this.props.value}
                        spellCheck={true}
                        data-lpignore={this.autofill ? "false" : "true"}
                        autoComplete={this.autofill ? "on" : "off"}
                        readOnly={this.props.readOnly}
                        placeholder={this.props.placeholder}
                        className={"full-width " + this.props.inputClassName}
                    />
                        {this.props.autoComplete && this.props.autoComplete.length > 0 ? (
                            <>
                                <ul className={this.state.showAutocomplete ? "autocomplete-box" : "collapsed autocomplete-box"}>
                                {this.props.autoComplete.map( (item, itemIndex) => {
                                    return (
                                        <li
                                            key={itemIndex}
                                            onClick={() => this.setValue(item)}
                                        >
                                            {item}
                                        </li>
                                    )})}
                                </ul>
                            </>
                        ) : (
                            <></>
                        )}
                </div>
                </div>
            )
        } else {
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

                    <div className="position-relative">

                        {this.props.autoComplete && this.props.autoComplete.length > 0 ? (
                                <>
                                    {this.state.showAutocomplete ? (
                                        <button
                                            type="button"
                                            onClick={this.toggleDropDown}
                                            title="Close List"
                                            className="btn btn-primary btn-sm abs-right"
                                        >
                                            <FontAwesomeIcon icon={faAngleDoubleUp} />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={this.toggleDropDown}
                                            title="Open List"
                                            className="btn btn-primary btn-sm abs-right"
                                        >
                                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                                        </button>
                                    )}
                                </>
                            ) : (
                                <></>
                            )}
                        <input
                            type={this.type}
                            name={this.props.name}
                            autoFocus={this.props.autoFocus}
                            onChange={this.onChange}
                            value={this.props.value}
                            spellCheck={true}
                            data-lpignore={this.autofill ? "false" : "true"}
                            autoComplete={this.autofill ? "on" : "off"}
                            readOnly={this.props.readOnly}
                            placeholder={this.props.placeholder}
                            className={"full-width " + this.props.inputClassName}
                        />
                        {this.props.autoComplete && this.props.autoComplete.length > 0 ? (
                            <>
                                <ul className={this.state.showAutocomplete ? "autocomplete-box" : "collapsed autocomplete-box"}>
                                {this.props.autoComplete.map( (item, itemIndex) => {
                                    return (
                                        <li
                                            key={itemIndex}
                                            onClick={() => this.setValue(item)}
                                        >
                                            {item}
                                        </li>
                                    )
                                })}
                                </ul>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </label>

            )
        }

    }
}

interface IInputFieldProps {
    type?: string;
    noLabel?: boolean;
    label?: string;
    onChange( event: React.FormEvent<HTMLInputElement>): void
    value: string;
    instructions?: string;
    name?: string;
    className?: string;
    inputClassName?: string;
    autoFocus?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    autofill?: boolean;
    autoComplete?: string[];
}

interface IInputFieldState {
    showAutocomplete: boolean
}