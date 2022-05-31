import { Component, h, Host, Prop, Event, EventEmitter, Watch, State } from '@stencil/core';

@Component({
  tag: 'mpf-toggle',
  styleUrl: 'mpf-toggle.css',
  shadow: true,
})
export class MpfToggle {
  @State() isFocus = false;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string;

  /**
   * If `true`, the toggle is selected.
   */
  @Prop({ mutable: true }) selected = false;

  /**
   * If `true`, the user cannot interact with the toggle.
   */
  @Prop() disabled = false;

  /**
   * Label name for switch
   */
  @Prop() label: string;

  /**
   * Label name for switch
   */
  @Prop() labelposition: string = 'right';

  /**
   * Emitted when the value property has changed.
   */
  @Event() mpfChange!: EventEmitter<boolean>;

  /**
   * Emitted when the toggle has focus.
   */
  @Event() mpfFocus!: EventEmitter<void>;

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() mpfBlur!: EventEmitter<void>;

  @Watch('selected')
  checkedChanged(isSelected: boolean) {
    this.mpfChange.emit(isSelected);
  }

  private onClick = (ev: Event) => {
    ev.preventDefault();
    this.selected = !this.selected;
  };

  private onFocus = () => {
    this.isFocus = true;
    this.mpfFocus.emit();
  };

  private onBlur = () => {
    this.isFocus = false;
    this.mpfBlur.emit();
  };

  render() {
    const { selected, disabled, label, name, labelposition, isFocus } = this;

    return (
      <Host
        onClick={!disabled && this.onClick}
        aria-labelledby={name}
        aria-checked={`${selected}`}
        aria-hidden={disabled ? 'true' : null}
        class={{
          selected: selected,
          disabled: disabled,
        }}
      >
        {labelposition === 'left' && (
          <label htmlFor={name} class="left">
            {label}
          </label>
        )}
        <div class="container">
          <div
            class={{
              'circle-shadow': true,
              focus: isFocus,
            }}
          />
          <div class="circle" />
        </div>
        {labelposition === 'right' && <label htmlFor={name}>{label}</label>}
        <input
          type="checkbox"
          role="switch"
          aria-checked={selected}
          disabled={disabled}
          id={name}
          name={name}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
        />
      </Host>
    );
  }
}
