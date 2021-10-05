import { trigger, state, style, transition, animate, animateChild, query } from '@angular/animations';


export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '50px'
      // 'min-width': '200px'
      // 'min-height': '544px'
    })
  ),
  state('open',
    style({
      'min-width': '200px'
      // 'min-height': '544px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const onMobileSideNavChange = trigger('onMobileSideNavChange', [
  state('close',
    style({
      'min-width': '0px'
      // 'min-width': '200px'
      // 'min-height': '544px'
    })
  ),
  state('open',
    style({
      'min-width': '300px'
      // 'min-height': '544px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '45px',
      // 'margin-left': '203px',
      'margin-top': '7px',
      // 'min-height': '570px'
    })
  ),
  state('open',
    style({
      'margin-left': '45px',
      // 'margin-left': '57px',
      'margin-top': '7px',
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);

export const animateText = trigger('animateText', [
  state('hide',
    style({
      // tslint:disable-next-line:object-literal-key-quotes
      'display': 'none',
      // 'display': 'block',
    })
  ),
  state('show',
    style({
      // tslint:disable-next-line:object-literal-key-quotes
      'display': 'block',
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);
