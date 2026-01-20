const AppLogo = ({ bgDark = false }: { bgDark?: boolean }) => {
    return (
        <div>
            <span className="font-mono font-medium text-2xl"><span className={`${bgDark ? "text-[#FFFFFF]" : "text-[#333333]"}`}>mark</span><span className={"text-[#3282C2]"}>{"[it]"}</span></span>
        </div>
    )
}

export default AppLogo