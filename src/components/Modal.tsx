import { X } from "lucide-react";
import React from "react";
import ReactDOM from "react-dom"

export function Modal({ isOpen, onClose, children }: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}) {
    if (!isOpen) return null;

    return ReactDOM.createPortal (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 relative animate-scale-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {children}
            </div>
        </div>,
        document.getElementById("root")!
    );
};

export function ActionModal({ children, button }: {
    children: React.ReactNode | (({ onClose }: { onClose: ()=>void }) => React.ReactNode),
    button: React.ReactNode
}) {
    const [open, setOpen] = React.useState(false)
    const onClose = () => setOpen(false)
    return (
        <div>
            {React.cloneElement(button as any, {
                onClick: ()=>setOpen(true)
            })}
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                {typeof children == "function" ? children({ onClose }) : children}
            </Modal>
        </div>
    )
}