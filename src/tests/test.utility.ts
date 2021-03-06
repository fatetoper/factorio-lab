import { ComponentFixture } from '@angular/core/testing';

/* Don't care about coverage on test utility. */
/* istanbul ignore next */
export class TestUtility {
  static getDt(
    fixture: ComponentFixture<any>,
    dt: string,
    index = 0
  ): HTMLElement {
    return this.getSelector(fixture, `[data-test="${dt}"]`, index);
  }

  static getSelector(
    fixture: ComponentFixture<any>,
    selector: string,
    index = 0
  ): HTMLElement {
    return (fixture.nativeElement as HTMLElement).querySelectorAll(selector)[
      index
    ] as HTMLElement;
  }

  static clickDt(fixture: ComponentFixture<any>, dt: string, index = 0): void {
    return this.getDt(fixture, dt, index).click();
  }

  static clickSelector(
    fixture: ComponentFixture<any>,
    selector: string,
    index = 0
  ): void {
    return this.getSelector(fixture, selector, index).click();
  }

  static altClickDt(fixture: ComponentFixture<any>, dt: string): void {
    return this.altClick(this.getDt(fixture, dt));
  }

  static altClickSelector(
    fixture: ComponentFixture<any>,
    selector: string,
    index = 0
  ): void {
    return this.altClick(this.getSelector(fixture, selector, index));
  }

  static setTextDt(
    fixture: ComponentFixture<any>,
    dt: string,
    value: string,
    index = 0
  ): void {
    return this.setText(this.getDt(fixture, dt, index), value);
  }

  static setTextSelector(
    fixture: ComponentFixture<any>,
    selector: string,
    value: string,
    index = 0
  ): void {
    return this.setText(this.getSelector(fixture, selector, index), value);
  }

  static selectDt(
    fixture: ComponentFixture<any>,
    dt: string,
    value: string,
    index = 0
  ): void {
    return this.select(this.getDt(fixture, dt, index), value);
  }

  static selectSelector(
    fixture: ComponentFixture<any>,
    selector: string,
    value: string,
    index = 0
  ): void {
    return this.select(this.getSelector(fixture, selector, index), value);
  }

  static keyPressDt(
    fixture: ComponentFixture<any>,
    dt: string,
    value: string,
    index = 0
  ): void {
    return this.keyPress(this.getDt(fixture, dt, index), value);
  }

  static keyPressSelector(
    fixture: ComponentFixture<any>,
    selector: string,
    value: string,
    index = 0
  ): void {
    return this.keyPress(this.getSelector(fixture, selector, index), value);
  }

  static dispatchDt(
    fixture: ComponentFixture<any>,
    dt: string,
    event: string,
    index = 0
  ): void {
    return this.dispatch(this.getDt(fixture, dt, index), event);
  }

  static altClick(object: any): void {
    object.dispatchEvent(new MouseEvent('click'));
  }

  static dispatch(object: any, event: string): void {
    object.dispatchEvent(new Event(event));
  }

  static setText(object: any, value: string): void {
    object.value = value;
    object.dispatchEvent(new Event('input'));
  }

  static select(object: any, value: string): void {
    object.value = value;
    object.dispatchEvent(new Event('change'));
  }

  static keyPress(object: any, value: string): void {
    const event: any = document.createEvent('CustomEvent');
    event.key = value;
    event.initEvent('keypress', true, true);
    object.dispatchEvent(event);
  }
}
