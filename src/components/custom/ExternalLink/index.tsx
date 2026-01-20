
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
        <a className="link--external shadow" href={to} target="_blank" rel="noopener noreferrer" >
            <div className="ml-4">
            <div className="text-nowrap">{label}</div>
            <div className="text-sm text-slate-500 font-light">{linkLabel}</div>
            </div>
            <div className={"link__btn"} style={{ backgroundColor: iconBg }}>
                <ExternalLinkIcon color="white" />
            </div>

        </a>
    )
}

export default ExternalLink