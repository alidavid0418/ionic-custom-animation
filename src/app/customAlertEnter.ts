import { Animation } from '@ionic/core';

export function customAlertEnter(AnimationC: Animation, baseEl: HTMLElement): Promise<Animation> {
  const baseAnimation = new AnimationC();

  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));

  const wrapperAnimation = new AnimationC();
  const wrapperElem = baseEl.querySelector('.alert-wrapper') as HTMLElement;
  wrapperAnimation.addElement(wrapperElem);

  wrapperElem.style.top = '0';

  backdropAnimation.fromTo('opacity', 0.01, 0.3);

  wrapperAnimation.beforeStyles({ 'opacity': 1 });
  wrapperAnimation.fromTo('transform', `translateY(-${baseEl.clientHeight}px)`, 'translateY(0px)');

  return Promise.resolve(
    baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.36, 0.66, 0.3, 0.1, 1)')
    .duration(500)
    .add(wrapperAnimation)
    .add(backdropAnimation)
  );
}