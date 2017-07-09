class Responsive {
  get phoneQuery () {
    return this.phone_ ||
      (this.phone_ = window.matchMedia('(max-width: 479px)'))
  }

  get tabletQuery () {
    return this.tablet_ ||
      (this.tablet_ = window.matchMedia('(min-width: 480px) and (max-width: 839px)'))
  }

  get desktopQuery () {
    return this.desktop_ ||
      (this.desktop_ = window.matchMedia('(min-width: 840px)'))
  }

  get landscapeQuery () {
    return this.landscape_ ||
      (this.landscape_ = window.matchMedia('(orientation: landscape)'))
  }

  get isPhone () {
    return this.phoneQuery.matches
  }

  get isTablet () {
    return this.tabletQuery.matches
  }

  get isDesktop () {
    return this.desktopQuery.matches
  }

  get isLandscape () {
    return this.landscapeQuery.matches
  }

  get isPortrait () {
    return !this.landscapeQuery.matches
  }

  get mode () {
    return (this.isPhone) ? 'phone' : (this.isDesktop) ? 'desktop' : 'tablet'
  }

  get orientation () {
    return (this.isLandscape) ? 'landscape' : 'portrait'
  }
}

const responsive = new Responsive()
export default responsive
