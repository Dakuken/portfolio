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
        transition('* => Accueil', [query('.machin', animTo(0))]),
        transition('* => isRight', slideTo('right')),
        transition('isRight => *', slideTo('left')),
        // transition('Accueil => *', [query('.machin', animTo(1))]),
    ])

function slideTo(direction: string) {
    const optional = { optional: true }
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                with: '100%'
            })], optional),
        query(':enter', [style({ [direction]: '-100%' })]),
        group([
            query(':leave', [animate('600ms ease', style({ [direction]: '100%' }))], { optional: true }),
            query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))
            ]),
        ])
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
        animate('600ms ease', style({ opacity: fin })),
    ]
}