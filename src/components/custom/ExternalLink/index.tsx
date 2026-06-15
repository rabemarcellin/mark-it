
import { ExternalLink as ExternalLinkIcon } from "lucide-react"
type Props = {
    to: string;
    label: string;
    linkLabel: string;
    iconBg?: string

}
const ExternalLink = (
    { to, linkLabel, label, iconBg = "bg-blue-500" }: Props
) => {
    return (
        <a className="link--external bg-white/50 shadow" href={to} target="_blank" rel="noopener noreferrer" >
            <div className="ml-4">
            <div className="text-nowrap text-black text-sm lg:text-base">{label}</div>
            <div className="text-xs lg:text-sm text-slate-500 font-light">{linkLabel}</div>
            </div>
            <div className={"link__btn"} style={{ backgroundColor: iconBg }}>
                <ExternalLinkIcon color="white" />
            </div>

        </a>
    )
}

export default ExternalLink