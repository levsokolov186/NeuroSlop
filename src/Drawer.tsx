import {useEffect} from "react";
import './Drawer.css'

type DrawerProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    side?: "left" | "right"
    className?: string
}

export function Drawer({
                           isOpen,
                           onClose,
                           children,
                           side = 'right',
                           className='',
                       }:DrawerProps)
{
    useEffect(() => {
        if (!isOpen) {
            return
        }

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleEsc)
        return () => {
            document.removeEventListener('keydown', handleEsc)
        }
    }, [isOpen, onClose])

    useEffect(() => {
        if (!isOpen) {
            return
        }
        const original = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = original
        }
    }, [isOpen, onClose])

    return (
        <>
            <div
                className={`drawer-overlay ${isOpen ? 'drawer-overlay--visible' : ''}`}
                onClick={onClose}
            />

            <aside
                className={`drawer drawer--${side} ${isOpen ? 'drawer--open' : ''} ${className}`}
                role="dialog"
                aria-modal="true"
            >
                {children}
            </aside>
        </>
    )
}









