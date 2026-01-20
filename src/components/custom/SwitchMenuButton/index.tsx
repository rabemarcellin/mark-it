
type Props = {
    actions: {
        label: string;
        value: string;
    }[],
    selectedValue: string;
    handleChange: React.Dispatch<React.SetStateAction<string>>;
}
const SwitchMenuButton = ({ actions, handleChange, selectedValue }: Props) => {

    return (
        <div className="switch-menu-button">
            {actions.map((action) => (
                <button key={action.value} className={`${selectedValue === action.value ? "active" : ""}`} 
                
                onClick={() => handleChange(action.value)}>
                    {action.label}
                </button>
            ))}
        </div>
    )
}

export default SwitchMenuButton