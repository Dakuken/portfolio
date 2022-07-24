import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
    stagger
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
        transition(':enter', [query('.machin', animTo(0))]),
        transition(':leave', [query('.machin', animTo(1))]),
    ])

function animTo(base: number) {
    let fin = (base === 0) ? 1 : 0
    return [
        style({ opacity: base, }),
        stagger(500, [
            animate('600ms ease', style({ opacity: fin }))
        ])
    ]
}