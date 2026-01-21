import { useEffect, useRef, useState } from "react";
import ExternalLink from "@/components/custom/ExternalLink";
import AppLogo from "@/components/custom/Logo";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, FACEBOOK_PAGE_NAME, MESSENGER_URL } from "@/utils/constants";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


type Inputs = {
    sender_email: string;
    sender_name: string;
    subject: string;
    message: string;
}

type FormState = {
    sending: boolean;
    catchError: string[];
    inputs: Inputs;
}

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const defaultInputs = {
        sender_email: "",
        sender_name: "",
        subject: "",
        message: "",
    };

    const defaultFormState = {
        sending: false,
        catchError: [],
        inputs: defaultInputs,
    };

    const [formState, setFormState] = useState<FormState>(defaultFormState);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Validation des champs
            const errors: string[] = [];
            if (!formState.inputs.sender_name.trim()) {
                errors.push("sender_name");
            }
            if (!formState.inputs.sender_email.trim()) {
                errors.push("sender_email");
            }
            if (!formState.inputs.subject.trim()) {
                errors.push("subject");
            }
            if (!formState.inputs.message.trim()) {
                errors.push("message");
            }

            if (errors.length > 0) {
                setFormState({
                    ...formState,
                    catchError: errors,
                });
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? "animate-enter" : "animate-leave"
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="shrink-0 pt-0.5">
                                    {/* <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://avatars.githubusercontent.com/u/135693649?v=4"
                                        alt=""
                                    /> */}
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        <AppLogo />
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Veuillez remplir tous les champs obligatoires.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ));
                return;
            }

            if (
                !formRef.current ||
                formState.catchError.length !== 0
            ) {
                throw Error("error found!");
            }

            setFormState({ ...formState, sending: true });

            emailjs
                .send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        subject: formState.inputs.subject,
                        message: formState.inputs.message,
                        sender_name: formState.inputs.sender_name,
                        sender_email: formState.inputs.sender_email,
                    }
                )
                .then(
                    () => {
                        if (formRef.current) {
                            formRef.current.reset();
                            updateFormState("reset");
                        }
                        toast.custom((t) => (
                            <div
                                className={`${t.visible ? "animate-enter" : "animate-leave"
                                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex  ring-opacity-5`}
                            >
                                <div className="flex-1 w-0 p-4">
                                    <div className="flex items-start">
                                        <div className="shrink-0 pt-0.5">
                                            {/* <img
                                                className="h-10 w-10 rounded-full"
                                                src="https://avatars.githubusercontent.com/u/135693649?v=4"
                                                alt=""
                                            /> */}
                                        </div>
                                        <div className="ml-3 flex-1">
                                            <p className="text-sm font-medium text-gray-900">
                                                <AppLogo />
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Message reçu, on vous repondra au plus vite.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ));
                    },
                    (error) => {
                        setFormState({
                            ...formState,
                            catchError: [...formState.catchError, error.text],
                            sending: false,
                        });
                        toast.custom((t) => (
                            <div
                                className={`${t.visible ? "animate-enter" : "animate-leave"
                                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex  ring-opacity-5`}
                            >
                                <div className="flex-1 w-0 p-4">
                                    <div className="flex items-start">
                                        <div className="shrink-0 pt-0.5">
                                            {/* <img
                                                className="h-10 w-10 rounded-full"
                                                src="https://avatars.githubusercontent.com/u/135693649?v=4"
                                                alt=""
                                            /> */}
                                        </div>
                                        <div className="ml-3 flex-1">
                                            <p className="text-sm font-medium text-gray-900">
                                                <AppLogo />
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Message non envoyé, veuillez réessayer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ));
                    }
                );
        } catch (error) {
            setFormState({ ...formState, sending: false });
            toast.custom((t) => (
                <div
                    className={`${t.visible ? "animate-enter" : "animate-leave"
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex  ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="shrink-0 pt-0.5">
                                {/* <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://avatars.githubusercontent.com/u/135693649?v=4"
                                    alt=""
                                /> */}
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                    <AppLogo />
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Une erreur est survenue, veuillez réessayer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ));
        }
    };

    const updateFormState = (
        attr: string,
        target: { name: string; value?: string } = { name: "", value: "" },
        sending = true
    ) => {
        const { name, value = "" } = target;

        switch (attr) {
            case "reset":
                setFormState(defaultFormState);
                break;

            case "form":
                setFormState({
                    ...formState,
                    inputs: {
                        ...formState.inputs,
                        [name]: value,
                    },
                });
                break;

            case "catchError":
                setFormState({
                    ...formState,
                    catchError: [...new Set(formState.catchError.concat([name]))],
                });
                break;

            case "removeError":
                let catchError = formState.catchError;
                catchError = catchError.filter((error) => error !== name);

                setFormState({
                    ...formState,
                    catchError: catchError,
                });

                break;

            case "sending":
                setFormState({ ...formState, sending: sending });
                break;
        }
    };


    useEffect(() => {
        emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY,
        });
    }, []);

    return (
        <form
            ref={formRef}
            className="w-full flex-none h-full max-w-xl mx-auto"
            onSubmit={sendEmail}
        >
            <div className=" px-4 h-full bg-linear-to-b from-slate-200 from-20% via-slate-100 via-50% to-80% to-white">
                <h1 className="text-5xl font-bold mb-8"><AppLogo /></h1>
                <div className="mb-8">
                    <h3 className="mb-4">Nous contacter</h3>
                    <div className="text-black">
                        <ExternalLink to={MESSENGER_URL} label={FACEBOOK_PAGE_NAME} linkLabel="Messenger" />
                    </div>
                </div>

                <div className="contact-form">
                    <div className="flex flex-col gap-2">
                        <div className="mb-2">
                            <input 
                                type="text" 
                                id="sender_name" 
                                name="sender_name" 
                                placeholder="Nom"
                                value={formState.inputs.sender_name}
                                onChange={(e) => updateFormState("form", { name: "sender_name", value: e.target.value })}
                                onFocus={() => updateFormState("removeError", { name: "sender_name" })}
                            />
                        </div>

                        <div className="mb-2">
                            <input 
                                type="email" 
                                id="sender_email" 
                                name="sender_email" 
                                placeholder="Email"
                                value={formState.inputs.sender_email}
                                onChange={(e) => updateFormState("form", { name: "sender_email", value: e.target.value })}
                                onFocus={() => updateFormState("removeError", { name: "sender_email" })}
                            />
                        </div>

                        <div className="mb-2">
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                placeholder="Sujet"
                                value={formState.inputs.subject}
                                onChange={(e) => updateFormState("form", { name: "subject", value: e.target.value })}
                                onFocus={() => updateFormState("removeError", { name: "subject" })}
                            />
                        </div>

                        <div className="mb-8">
                            <textarea 
                                id="message" 
                                name="message" 
                                placeholder="Message"
                                value={formState.inputs.message}
                                onChange={(e) => updateFormState("form", { name: "message", value: e.target.value })}
                                onFocus={() => updateFormState("removeError", { name: "message" })}
                            />
                        </div>

                        <button type="submit" disabled={formState.sending}>
                            {formState.sending ? "Envoi..." : "Envoyer"}
                        </button>
                    </div>
                </div>
                <div className="text-sm text-slate-500 mt-8">
                    <div className="">
                        <ExternalLink to="https://wa.me/261377723961" linkLabel="Whatsapp" label="+261 37 77 239 61" iconBg="oklch(72.3% 0.219 149.579)" />
                    </div>
                    <div className="text-sm text-slate-500 my-4 text-center leading-relaxed">
                        <div>
                            101, Antananarivo, Madagascar
                        </div>
                        <div>
                            Site crée et maintenue par <a href="https://rabemarcellin.netlify.app" className="font-medium text-black" target="_blank" rel="noopener noreferrer">RABE Marcellin {"</>"} </a>
                            - 2026
                        </div>
                        <a href="mailto:marcellinr.rabe@gmail.com">
                            marcellinr.rabe@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </form>)
}

export default ContactForm