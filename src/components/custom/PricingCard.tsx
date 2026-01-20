
type Props = {
    title: string;
    price: number;
    currency: string;
    unit: string;
    description: string;
    actionLabel: string;
    onClick: () => void | Promise<void>;
}
const PricingCard = ({ title, price, currency, unit, description, actionLabel, onClick }: Props) => {
    return (
        <div className="shadow-xl p-4 rounded-xl border border-slate-100">
            <div className="p-4 bg-slate-100 rounded-md">
                <h1 className="font-medium text-2xl mb-2 text-blue-400">
                    {title}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-5xl font-medium">{price} {currency}</h3>
                    <span className="text-sm text-slate-500">{unit}</span>
                </div>

                <div className="text-slate-500 mb-8">
                    {description}
                </div>
                <div onClick={onClick}>
                    <button className="bg-blue-500 text-white rounded-xl p-2 w-full">
                        {actionLabel}
                    </button>
                </div>
            </div>
        </div>)
}

export default PricingCard