import type { SwiperOptions } from './swiper-options';
import type { CSSSelector, SwiperModule } from './shared';
import type { SwiperEvents } from './swiper-events';

import type { A11yMethods } from './modules/a11y';
import type { AutoplayMethods } from './modules/autoplay';
import type { ControllerMethods } from './modules/controller';
import type { CoverflowEffectMethods } from './modules/effect-coverflow';
import type { CubeEffectMethods } from './modules/effect-cube';
import type { FadeEffectMethods } from './modules/effect-fade';
import type { FlipEffectMethods } from './modules/effect-flip';
import type { CreativeEffectMethods } from './modules/effect-creative';
import type { CardsEffectMethods } from './modules/effect-cards';
import type { HashNavigationMethods } from './modules/hash-navigation';
import type { HistoryMethods } from './modules/history';
import type { KeyboardMethods } from './modules/keyboard';
import type { MousewheelMethods } from './modules/mousewheel';
import type { NavigationMethods } from './modules/navigation';
import type { PaginationMethods } from './modules/pagination';
import type { ParallaxMethods } from './modules/parallax';
import type { ScrollbarMethods } from './modules/scrollbar';
import type { ThumbsMethods } from './modules/thumbs';
import type { VirtualMethods } from './modules/virtual';
import type { ZoomMethods } from './modules/zoom';
import type { FreeModeMethods } from './modules/free-mode';
import type { ManipulationMethods } from './modules/manipulation';

interface SwiperClass<Events> {
  /** Add event handler */
  on<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Add event handler that will be removed after it was fired */
  once<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Remove event handler */
  off<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Remove all handlers for specified event */
  off<E extends keyof Events>(event: E): void;
  /** Fire event on instance */
  emit<E extends keyof Events>(event: E, ...args: any[]): void;
}

interface Swiper extends SwiperClass<SwiperEvents> {
  /**
   * Object with passed initialization parameters
   */
  params: SwiperOptions;

  /**
   * Object with original initialization parameters
   */
  originalParams: SwiperOptions;

  /**
   * Slider container HTML element
   */
  el: HTMLElement;

  /**
   * Wrapper HTML element
   */
  wrapperEl: HTMLElement;

  /**
   * Wrapper HTML element
   */
  slidesEl: HTMLElement;

  /**
   * Array of slides HTML elements. To get specific slide HTMLElement use `swiper.slides[1]`
   */
  slides: HTMLElement[];

  /**
   * !INTERNAL
   */
  loopedSlides: number | null;

  /**
   * Width of container
   */
  width: number;

  /**
   * Height of container
   */
  height: number;

  /**
   * Current value of wrapper translate
   */
  translate: number;

  /**
   * Current progress of wrapper translate (from 0 to 1)
   */
  progress: number;

  /**
   * Index number of currently active slide
   *
   * @note Note, that in loop mode active index value will be always shifted on a number of looped slides
   */
  activeIndex: number;

  /**
   * Index number of currently active slide considering rearranged slides in loop mode
   */
  realIndex: number;

  /**
   * Index number of previously active slide
   */
  previousIndex: number;

  /**
   * Index number of current snap in `snapGrid`
   */
  snapIndex: number;

  /**
   * Slides snap grid
   */
  snapGrid: number[];

  /**
   * Slides grid
   */
  slidesGrid: number[];

  /**
   * Array of widths for slides
   */
  slidesSizesGrid: number[];

  /**
   * `true` if slider on most "left"/"top" position
   */
  isBeginning: boolean;

  /**
   * `true` if slider on most "right"/"bottom" position
   */
  isEnd: boolean;

  /**
   * `true` if slide is "locked" (by `watchOverflow`) and slides can not be, e.g. when amount of slides is less that slides per view
   */
  isLocked: boolean;

  /**
   * `true` if swiper is in transition
   */
  animating: boolean;

  /**
   * Object with the following touch event properties:
   *
   * - `swiper.touches.startX`
   * - `swiper.touches.startY`
   * - `swiper.touches.currentX`
   * - `swiper.touches.currentY`
   * - `swiper.touches.diff`
   */
  touches: {
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
    diff: number;
  };

  /**
   * Index number of last clicked slide
   */
  clickedIndex: number;

  /**
   * Link to last clicked slide (HTMLElement)
   */
  clickedSlide: HTMLElement;

  /**
   * Disable / enable ability to slide to the next slides by assigning `false` / `true` to this property
   */
  allowSlideNext: boolean;

  /**
   * Disable / enable ability to slide to the previous slides by assigning `false` / `true` to this property
   */
  allowSlidePrev: boolean;

  /**
   * Disable / enable ability move slider by grabbing it with mouse or by touching it with finger (on touch screens) by assigning `false` / `true` to this property
   */
  allowTouchMove: boolean;

  /**
   * Direction of sliding
   */
  swipeDirection: 'prev' | 'next';

  /**
   * !INTERNAL
   */
  rtlTranslate: boolean;

  /**
   * `true` if Swiper is enabled, `false` otherwise
   */
  enabled: boolean;

  /**
   * Disable Swiper (if it was enabled). When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions
   *
   */
  disable(): void;

  /**
   * Enable Swiper (if it was disabled)
   *
   */
  enable(): void;

  /**
   * Set Swiper translate progress (from 0 to 1). Where 0 - its initial position (offset) on first slide, and 1 - its maximum position (offset) on last slide
   *
   * @param progress Swiper translate progress (from 0 to 1).
   * @param speed Transition duration (in ms).
   */
  setProgress(progress: number, speed?: number): void;

  /**
   * Run transition to next slide.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideNext(speed?: number, runCallbacks?: boolean): boolean;

  /**
   * Run transition to previous slide.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slidePrev(speed?: number, runCallbacks?: boolean): boolean;

  /**
   * Run transition to the slide with index number equal to 'index' parameter for the
   *  duration equal to 'speed' parameter.
   *
   * @param index Index number of slide.
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideTo(index: number, speed?: number, runCallbacks?: boolean): boolean;

  /**
   * Does the same as .slideTo but for the case when used with enabled loop. So this
   * method will slide to slides with realIndex matching to passed index
   *
   * @param index Index number of slide.
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideToLoop(index: number, speed?: number, runCallbacks?: boolean): Swiper;

  /**
   * Reset swiper position to currently active slide for the duration equal to 'speed'
   * parameter.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideReset(speed?: number, runCallbacks?: boolean): boolean;

  /**
   * Reset swiper position to closest slide/snap point for the duration equal to 'speed' parameter.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideToClosest(speed?: number, runCallbacks?: boolean): boolean;

  /**
   * Get dynamically calculated amount of slides per view, useful only when slidesPerView set to `auto`
   *
   */
  slidesPerViewDynamic(): number;

  /**
   * Force swiper to update its height (when autoHeight enabled) for the duration equal to
   * 'speed' parameter
   *
   * @param speed Transition duration (in ms).
   */
  updateAutoHeight(speed?: number): void;

  /**
   * You should call it after you add/remove slides
   * manually, or after you hide/show it, or do any
   * custom DOM modifications with Swiper
   * This method also includes subcall of the following
   * methods which you can use separately:
   */
  update(): void;

  /**
   * recalculate size of swiper container
   */
  updateSize(): void;

  /**
   * recalculate number of slides and their offsets. Useful after you add/remove slides with JavaScript
   */
  updateSlides(): void;

  /**
   * recalculate swiper progress
   */
  updateProgress(): void;

  /**
   * update active/prev/next classes on slides and bullets
   */
  updateSlidesClasses(): void;

  /**
   * Changes slider direction from horizontal to vertical and back.
   *
   * @param direction New direction. If not specified, then will automatically changed to opposite direction
   * @param needUpdate Will call swiper.update(). Default true
   */
  changeDirection(direction?: 'horizontal' | 'vertical', needUpdate?: boolean): void;

  /**
   * Changes slider language
   *
   * @param direction New direction. Should be `rtl` or `ltr`
   */
  changeLanguageDirection(direction: 'rtl' | 'ltr'): void;

  /**
   * Detach all events listeners
   */
  detachEvents(): void;

  /**
   * Attach all events listeners again
   */
  attachEvents(): void;

  /**
   * !INTERNAL
   */
  loopCreate(): void;

  /**
   * !INTERNAL
   */
  loopDestroy(): void;

  /**
   * Initialize slider
   */
  init(el?: HTMLElement): Swiper;

  /**
   * Destroy slider instance and detach all events listeners
   *
   * @param deleteInstance Set it to false (by default it is true) to not to delete Swiper instance
   * @param cleanStyles Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container.
   * Useful if you need to destroy Swiper and to init again with new options or in different direction
   */
  destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;

  /**
   * Set custom css3 transform's translate value for swiper wrapper
   */
  setTranslate(translate: any): void;

  /**
   * Get current value of swiper wrapper css3 transform translate
   */
  getTranslate(): any;

  /**
   * Animate custom css3 transform's translate value for swiper wrapper
   *
   * @param translate Translate value (in px)
   * @param speed Transition duration (in ms)
   * @param runCallbacks Set it to false (by default it is true) and transition will not produce  transition events
   * @param translateBounds Set it to false (by default it is true) and transition value can extend beyond min and max translate
   *
   */
  translateTo(
    translate: number,
    speed: number,
    runCallbacks?: boolean,
    translateBounds?: boolean,
  ): any;

  /**
   * Get current minimal translate value
   */
  minTranslate(): number;

  /**
   * Get current maximal translate value
   */
  maxTranslate(): number;

  /**
   * Unset grab cursor
   */
  unsetGrabCursor(): void;

  /**
   * Set grab cursor
   */
  setGrabCursor(): void;

  /**
   * Add event listener that will be fired on all events
   */
  onAny(handler: (eventName: string, ...args: any[]) => void): void;

  /**
   * Remove event listener that will be fired on all events
   */
  offAny(handler: (eventName: string, ...args: any[]) => void): void;

  /**
   * !INTERNAL
   */
  isHorizontal(): boolean;

  /**
   * !INTERNAL
   */
  getBreakpoint(breakpoints: SwiperOptions['breakpoints']): string;

  /**
   * !INTERNAL
   */
  setBreakpoint(): void;

  /**
   * !INTERNAL
   */
  currentBreakpoint: any;

  /**
   * !INTERNAL
   */
  destroyed: boolean;

  /**
   * !INTERNAL
   */
  modules: Array<SwiperModule>;

  a11y: A11yMethods;
  autoplay: AutoplayMethods;
  controller: ControllerMethods;
  coverflowEffect: CoverflowEffectMethods;
  cubeEffect: CubeEffectMethods;
  fadeEffect: FadeEffectMethods;
  flipEffect: FlipEffectMethods;
  creativeEffect: CreativeEffectMethods;
  cardsEffect: CardsEffectMethods;
  hashNavigation: HashNavigationMethods;
  history: HistoryMethods;
  keyboard: KeyboardMethods;
  mousewheel: MousewheelMethods;
  navigation: NavigationMethods;
  pagination: PaginationMethods;
  parallax: ParallaxMethods;
  scrollbar: ScrollbarMethods;
  thumbs: ThumbsMethods;
  virtual: VirtualMethods;
  zoom: ZoomMethods;
  freeMode: FreeModeMethods;
}

interface Swiper extends ManipulationMethods {}

declare class Swiper implements Swiper {
  /**
   * Constructs a new Swiper instance.
   *
   * @param container Where Swiper applies to.
   * @param options   Instance options.
   */
  constructor(container: CSSSelector | HTMLElement, options?: SwiperOptions);
  /**
   * Installs modules on Swiper in runtime.
   */
  static use(modules: SwiperModule[]): void;

  /**
   * Swiper default options
   */
  static defaults: SwiperOptions;

  /**
   * Extend global Swiper defaults
   */
  static extendDefaults(options: SwiperOptions): void;

  /**
   * Object with global Swiper extended options
   */
  static extendedDefaults: SwiperOptions;
}

export default Swiper;
