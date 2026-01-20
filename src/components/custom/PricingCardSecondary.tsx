import { MESSENGER_URL } from '@/utils/constants'
import { Facebook } from 'lucide-react'

type Props = {
    price: string;
    dayDuration: string;
    variant?: 'primary' | 'secondary';
    
}
const PricingCardSecondary = ({price, dayDuration, variant = 'primary'}: Props) => {
  return (
    variant === 'primary' ? (
    <div>
        <div className="my-4">
            <h3 className="text-4xl font-bold mb-2">
              {price}
            </h3>
            <span className="font-light pr-2">Ariary / 2.3K personnes touchés</span>
            <span className="text-sm text-slate-500">/ {dayDuration}</span>
          </div>
          <div>
            {[
              "Boost publication",
              "Boost page"
            ].map((textLabel, index) => (
              <div key={textLabel} className={`${index % 2 === 0 ? "bg-slate-100" : "bg-white/90"} p-2`}>{textLabel}</div>
            ))}
          </div>

          <a
            href={MESSENGER_URL} target="_blank" rel="noopener noreferrer"

            className="flex-none p-2 mt-4 mb-2 bg-blue-400 rounded-full text-white flex items-center justify-between hover:shadow-2xl hover:translate-y-[-4px] hover:transition-all duration-300">
            <div className="ml-4 text-center flex-auto">
              <div>
                Discuter
              </div>
              <div className="text-sm text-slate-200">sur Messenger</div>
            </div>
            <div className="flex-none flex items-center gap-2">
              <div className="link__btn !bg-white">
                <Facebook color="blue" />
              </div>
            </div>

          </a>
    </div>
    ): (
        <div className=" text-white">
        <div className="my-4">
            <h3 className="text-4xl font-bold mb-2">
              {price}
            </h3>
            <span className="font-light pr-2">Ariary / 2.3K personnes touchés</span>
            <span className="text-sm">/ {dayDuration}</span>
          </div>
          <div>
            {[
              "Boost publication",
              "Boost page"
            ].map((textLabel, index) => (
              <div key={textLabel} className={`${index % 2 === 0 ? "backdrop-blur-sm bg-white/20" : "bg-white/10"} p-2`}>{textLabel}</div>
            ))}
          </div>

          <a
            href={MESSENGER_URL} target="_blank" rel="noopener noreferrer"

            className="flex-none p-2 mt-4 mb-2 bg-blue-400 rounded-full text-white flex items-center justify-between hover:shadow-2xl hover:translate-y-[-4px] hover:transition-all duration-300">
            <div className="ml-4 text-center flex-auto">
              <div>
                Discuter
              </div>
              <div className="text-sm text-slate-200">sur Messenger</div>
            </div>
            <div className="flex-none flex items-center gap-2">
              <div className="link__btn !bg-white">
                <Facebook color="blue" />
              </div>
            </div>

          </a>
    </div>
    )
  )
}

export default PricingCardSecondary