import { ShareConfigProps } from "./social-providers"

type UseShareProps = ShareConfigProps & {
    clipboardTimeout?: number
}

export function useShare({ url, title, text, clipboardTimeout = 2000 }: UseShareProps) {
    const shareConfig = {
        url,
        ...(title && { title }),
        ...(text && { text })
    }
    
    return {

    }
}