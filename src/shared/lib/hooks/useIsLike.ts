import { useIsBoolean } from '~/shared/lib/hooks/base/useIsBoolean'

interface IUseIsLike {
    isLike: boolean
    toggleIsLike: () => void
}

export function useIsLike(init: boolean = false): IUseIsLike {
    const { value: isLike, toggle: toggleIsLike } = useIsBoolean(init)

    return {
        isLike,
        toggleIsLike
    }
}
