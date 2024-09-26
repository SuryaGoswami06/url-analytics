import React, { memo } from 'react'

const variantStyle={
    primary:'bg-primary flex justify-center items-center mx-1 h-9 px-4 text-white rounded-lg capitalize hover:bg-[#2E5BEB]',
    ghost:'flex justify-center items-center py-2 rounded-lg px-4 mx-1 text-black hover:bg-primaryHoverColor'
}
// primary & classname ->primary
// primary -> primary
// ghost & classname -> classname

const Button=memo(({
    label,
    type='button',
    Icon,
    variant='primary',
    onClick,
    disabled=false
})=>{
    return(
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={variant=='primary'?variantStyle[variant]:variantStyle[variant]}
        >
        {
            Icon && <Icon/>
        }
        <span>{label}</span>
        </button>
    )
})

export default Button