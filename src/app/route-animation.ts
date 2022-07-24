import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
    stagger,
    state
} from '@angular/animations';

export const slider =
    trigger('routeAnimations', [
        transition('Accueil => *', fade('right')),
        // transition('Accueil => *', [query('.machin', animTo(1))]),
    ])

function fade(direction: string) {
    const optional = { optional: true }
    return [
        query(' :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                with: '100%',
                overflow: 'hidden',
                opacity: 1,

            })], optional),
        query(':leave', [animate('300ms ease', style({ top: '50%', [direction]: '50%', opacity: 0, overflow: 'hidden', }))], { optional: true }),
    ]
}

export const anim =

    trigger('animation1', [
        state('false', style({ opacity: 0 })),
        state('true', style({ opacity: 1 })),
        transition('false => true', animTo(0)),
        transition('true => false', animTo(1)),
    ])

function animTo(base: number) {
    let fin = (base === 0) ? 1 : 0
    return [
        style({ opacity: base, }),
        animate('1000ms ease', style({ opacity: fin })),
    ]
}