export type Content = React.ReactChild | React.ReactChild[]

export enum SizeButton {
    sm = 'sm',
    lg = 'lg',
}

export type SizeVariant = keyof typeof SizeButton

export type Select = {
    label: string
    value: any
    icon?: string
}