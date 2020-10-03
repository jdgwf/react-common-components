import * as React from 'react';

export default class SelectFieldStringList extends React.Component<ISelectFieldStringListProps, ISelectFieldStringListState> {

    constructor( props: ISelectFieldStringListProps ) {
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
{this.props.readOnly ? (
    <>
        {this.props.value}
    </>
) : (
    <>
                <select
                    onChange={this.props.onChange}
                    value={this.props.value}
                    autoFocus={this.props.autoFocus}
                >
                    {this.props.listItems.map( (labelText: string, index: number) => {
                        return (
                            <option key={index}>{labelText}</option>
                        )
                    })}
                </select><br />
    </>
)}

            </label>

        )
    }
}

interface ISelectFieldStringListProps {
    label: string;
    onChange( event: React.FormEvent<HTMLSelectElement>): void
    value: string;
    instructions?: string;
    name?: string;
    listItems: string[];
    className?: string;
    inputClassName?: string;
    autoFocus?: boolean;
    readOnly?: boolean;

}

interface ISelectFieldStringListState {
}