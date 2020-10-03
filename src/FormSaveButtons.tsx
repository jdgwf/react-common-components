import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faSave, faBan } from '@fortawesome/free-solid-svg-icons';

export default class FormSaveButtons extends React.Component<IFormSaveButtonsProps, IFormSaveButtonsState> {

    constructor( props: IFormSaveButtonsProps ) {
        super( props);

        this.onCancel =  this.onCancel.bind(this);
    }

    onCancel( event: React.FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        if( this.props.onCancel ) {
            this.props.onCancel()
        }
    }

    render() {
        if( !this.props.onCancel && this.props.readOnly) {
            return <></>
        }
        return (
                <div className="text-right">
{this.props.readOnly ? (
    <>
                    <button
                        type="button"
                        onClick={this.onCancel}
                        className="btn btn-primary"
                        title={"Click here to close this " + this.props.itemName + ""}
                    >
                        <FontAwesomeIcon icon={faBan} />&nbsp;Close
                    </button>
    </>
) : (
    <>
                    <button
                        type="button"
                        onClick={this.props.reset}
                        className="btn btn-primary pull-left"
                        title={"Click here to reset the data of this " + this.props.itemName + " to the unmodified state"}
                    >
                        <FontAwesomeIcon icon={faRecycle} />&nbsp;Reset
                    </button>

{this.props.onCancel ? (
    <>
                    <button
                        type="button"
                        onClick={this.onCancel}
                        className="btn btn-secondary"
                        title={"Click here to cancel the edit of this " + this.props.itemName + " and close this form"}
                    >
                        <FontAwesomeIcon icon={faBan} />&nbsp;Cancel
                    </button>
                    &nbsp;
    </> ) : ( <></> )}

                    <button
                        type="submit"
                        className="btn btn-primary"
                        title={"Click here to save this " + this.props.itemName}
                        disabled={this.props.submitDisabled}
                    >
                        <FontAwesomeIcon icon={faSave} />&nbsp;Save
                    </button>
                    {this.props.children ? (
                    <div className="text-left">
                        <br />
                        {this.props.children}
                    </div>
                    ) : (
                        <></>
                    )}
</> )}
                </div>
        )
    }
}

interface IFormSaveButtonsProps {
    itemName: string;
    onCancel?(): void
    reset( event: React.FormEvent<HTMLButtonElement>): void
    submitDisabled?: boolean;
    readOnly?: boolean;

}

interface IFormSaveButtonsState {
}