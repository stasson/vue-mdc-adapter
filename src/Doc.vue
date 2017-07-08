<template>
  <div id="doc" class="mdc-typography" style="height=100%">
  
    <mdc-toolbar waterfall>
      <mdc-toolbar-row>
        <mdc-toolbar-section align-start >
          <a @click="toggleDrawer" id="menu-icon" href="#" 
           class="material-icons mdc-theme--text-icon-on-primary"
           v-if="drawerType!=='permanent'"
          >menu</a>
        </mdc-toolbar-section>
        <mdc-toolbar-section align-start >
          <mdc-toolbar-title class="mdc-theme--text-icon-on-primary">Vue MDC Adapter</mdc-toolbar-title>
        </mdc-toolbar-section>
      </mdc-toolbar-row>
    </mdc-toolbar>
  
    <div class="drawer-layout">
      <div>
        <component :is="drawerComponent" ref="drawer" >
          <mdc-drawer-header :type="drawerType" class="drawer-header"></mdc-drawer-header>
           <mdc-list>
             <a class="mdc-list-item" v-for="item in sections" :key="item.id"
             :href="'#'+item.id"
               >{{item.text}}</a>
           </mdc-list>
           </component>
      </div>
    
      <div>
        <section id="buttons" class="doc-section">
          <mdc-headline>Buttons</mdc-headline>
          <div class="doc-center">
            <p>
              <mdc-button>Flat</mdc-button>
              <mdc-button primary>Flat</mdc-button>
              <mdc-button accent>Flat</mdc-button>
              <mdc-button disabled>Flat</mdc-button>
            </p>
            <p>
              <mdc-button dense >Dense</mdc-button>
              <mdc-button dense primary>Dense</mdc-button>
              <mdc-button dense accent>Dense</mdc-button>
              <mdc-button dense disabled>Dense</mdc-button>
            </p>
            <p>
              <mdc-button compact >Compact</mdc-button>
              <mdc-button compact primary>Compact</mdc-button>
              <mdc-button compact accent>Compact</mdc-button>
              <mdc-button compact disabled>Compact</mdc-button>
            </p>
            <p>
              <mdc-button raised >Raised</mdc-button>
              <mdc-button raised primary>Raised</mdc-button>
              <mdc-button raised accent>Raised</mdc-button>
              <mdc-button raised disabled>Raised</mdc-button>
            </p>
            <p>
              <mdc-button dense raised >Dense</mdc-button>
              <mdc-button dense raised primary>Dense</mdc-button>
              <mdc-button dense raised accent>Dense</mdc-button>
              <mdc-button dense raised disabled>Dense</mdc-button>
            </p>
            <p>
              <mdc-button compact raised >Compact</mdc-button>
              <mdc-button compact raised primary>Compact</mdc-button>
              <mdc-button compact raised accent>Compact</mdc-button>
              <mdc-button compact raised disabled>Compact</mdc-button>
            </p>
          </div>
        </section>
      
        <section id="fab" class="doc-section">
          <mdc-headline>Fab</mdc-headline>
          <div  class="doc-center">
            <mdc-fab>favorite</mdc-fab>
            <mdc-fab mini>favorite</mdc-fab>
            <mdc-fab plain>favorite</mdc-fab>
            <mdc-fab mini plain>favorite</mdc-fab>
            <mdc-fab mini disabled>favorite</mdc-fab>
            <mdc-fab plain fixed @click="scrollToTop">home</mdc-fab>
          </div>
        </section>
      
        <section id="icon-toggle" class="doc-section" >
          <mdc-headline>Icon Toggle</mdc-headline>
          <div class="doc-center">
            <mdc-icon-toggle v-model="toggle"
              toggle-on="favorite" label-on="Remove from favorites"
              toggle-off="favorite_border" label-off="Add to favorites"
              ></mdc-icon-toggle>
            
            <mdc-icon-toggle primary v-model="toggle"
              toggle-on="star" toggle-off="star_border" 
            ></mdc-icon-toggle>
            <mdc-icon-toggle accent v-model="toggle"
              toggle-on="cloud_done" toggle-off="cloud" 
            ></mdc-icon-toggle>
            <mdc-icon-toggle disabled
              toggle-on="mood_bad" toggle-off="mood" ></mdc-icon-toggle>
          </div>
        </section>
      
      
        <section id="cards" class="doc-section">
          <mdc-headline>Cards</mdc-headline>
          <mdc-card class="doc-center">
            <mdc-card-media height=150 :src="image.card" ></mdc-card-media>
            <mdc-card-header title="Title" subtitle="Subtitle"></mdc-card-header>
            <mdc-card-horizontal>
              <mdc-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </mdc-card-text>
                <mdc-card-img :src="image.tile" ></mdc-card-img>
            </mdc-card-horizontal>
            <mdc-card-actions
               :actions="['action1', {action:'action2', text:'action2'}]"
               @action="alert" >
            </mdc-card-actions>
          </mdc-card>
        </section>

        <section id="dialog" class="doc-section">
          <mdc-headline>Dialog</mdc-headline>
          <mdc-button raised @click="showDialog()">Show Dialog</mdc-button>
          <mdc-dialog ref="dialog" title="Dialog" accept="Accept" cancel="Decline"
            @accept="alert('accepted')" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </mdc-dialog>
        </section>
        
        <section id="drawer" class="doc-section">
          <mdc-headline>Drawers</mdc-headline>
          <mdc-button raised @click="switchDrawer('temporary')">Temporary</mdc-button>
          <mdc-button raised @click="switchDrawer('persistent')">Persistent</mdc-button>
          <mdc-button raised @click="switchDrawer('permanent')">Permanent</mdc-button>
        </section>

      
        <section id="grid-list" class="doc-section" >
          <mdc-headline>Grid List</mdc-headline>
          <mdc-grid-list icon-align-start with-support-text width=150 class="doc-center">
            <mdc-grid-tile :src="image.tile"
              :title="'Title ' + (index + 1)"
              support-text="support text" cover icon="star_border"
              v-for="(item, index) in 6" :key="index"></mdc-grid-tile>
          </mdc-grid-list>
        </section>
      
        <section id="input-controls" class="doc-section" >
          <mdc-headline>Input and Controls</mdc-headline>
      
          <mdc-subheading>Checkbox</mdc-subheading>
          <div class="doc-center">
            <p><mdc-checkbox v-model="checked" :indeterminate.sync="indeterminate"
                :label="checked?'checked':'unchecked'"
                ></mdc-checkbox>
              <br>
              <mdc-button dense @click="makeIndeterminate">make indeterminate</mdc-button>
            </p>
            <p><mdc-checkbox disabled label="Disabled"></mdc-checkbox></p>
            <p><br></p>
          </div>
        
          <mdc-subheading>Switch</mdc-subheading>
          <div class="doc-center">
            <p><mdc-switch v-model="checked" :label="checked?'switch on':'switch off'"></mdc-switch></p>
            <p><mdc-switch disabled label="Disabled"></mdc-switch></p>
            <p><br></p>
          </div>

          <mdc-subheading>Radio</mdc-subheading>
          <div class="doc-center">
            <mdc-radio label="Radio1" name="radios" v-model="picked" checked></mdc-radio>
            <mdc-radio label="Radio2" name="radios" v-model="picked"></mdc-radio>
            <br>
            <mdc-button dense >{{ picked }}</mdc-button>
            <p><br></p>
          </div>
          
          <mdc-subheading>Textfield</mdc-subheading>
          <div class="doc-center">
            <mdc-textfield v-model="textField" 
              label="Simple textfield"></mdc-textfield>
            <mdc-textfield v-model="textField" 
              label="with help text" 
              helptext="Help text..."></mdc-textfield>
            <p><mdc-textfield 
              label="disabled" disabled></mdc-textfield></p>
            <p><mdc-textfield type="password" label="Password"
                required minlength=8 maxlength=10
                helptext="passord must be 8 to 10 characters"
                helptext-persistent helptext-validation
                v-model="password"></mdc-textfield></p>
            <p><mdc-textfield v-model="textField" multiline 
                label="multiline" ></mdc-textfield></p>
            <p><mdc-textfield v-model="textField" fullwidth
                label="fullwidth"
                helptext="Help text..." ></mdc-textfield></p>
          </div>
        
        </section>
      

        <section id="layout-grid" class="doc-section" >
          <mdc-headline>Layout Grid</mdc-headline>
          <mdc-layout-grid class=grid>
            <mdc-layout-cell class="cell" desktop=3 tablet=3 >
              <p>Cell</p>
            </mdc-layout-cell>
            <mdc-layout-cell class="cell" desktop=3 tablet=5 align="top" >
              Top
            </mdc-layout-cell>
            <mdc-layout-cell class="cell" desktop=3 tablet=5 align="middle">
              Middle
            </mdc-layout-cell>
            <mdc-layout-cell class="cell" desktop=3 tablet=3 align="bottom">
              Bottom
            </mdc-layout-cell>
          </mdc-layout-grid>
        </section>
      
      
        <section id="list" class="doc-section" >
          <mdc-headline>List</mdc-headline>
      
          <mdc-list bordered class="doc-center">
            <mdc-list-item>Single-line item</mdc-list-item>
            <mdc-list-item>Single-line item</mdc-list-item>
            <mdc-list-item>Single-line item</mdc-list-item>
          </mdc-list>
          <p><br></p>
          <mdc-list two-line bordered class="doc-center">
            <mdc-list-item>
              <span>First line</span>
              <span slot="secondary">Second line</span>
            </mdc-list-item>
            <mdc-list-item>
              <span>First line</span>
              <span slot="secondary">Second line</span>
            </mdc-list-item>
            <mdc-list-item>
              <span>First line</span>
              <span slot="secondary">Second line</span>
            </mdc-list-item>
          </mdc-list>
          <p><br></p>
          <mdc-list dense bordered class="doc-center">
            <mdc-list-item>Dense item</mdc-list-item>
            <mdc-list-item>Dense item</mdc-list-item>
            <mdc-list-item>Dense item</mdc-list-item>
          </mdc-list>
          <p><br></p>
          <mdc-list bordered class="doc-center">
            <mdc-list-item>
              <i slot="start-detail" class="material-icons">favorite_border</i>
              With start details
            </mdc-list-item>
            <mdc-list-item>
              With end details
              <i slot="end-detail" class="material-icons">star_border</i>
            </mdc-list-item>
            <mdc-list-item>
              <i slot="start-detail" class="material-icons">favorite_border</i>
              With both details
              <i slot="end-detail" class="material-icons">star_border</i>
            </mdc-list-item>
          </mdc-list>
          <p><br></p>
          <mdc-list-group bordered class="doc-center">
            <mdc-list-group-header>Group 1</mdc-list-group-header>
            <mdc-list>
              <mdc-list-item>Single-line item</mdc-list-item>
              <mdc-list-item>Single-line item</mdc-list-item>
              <mdc-list-item>Single-line item</mdc-list-item>
            </mdc-list>
            <mdc-list-group-divider></mdc-list-group-divider>
            <mdc-list-group-header>Group 2</mdc-list-group-header>
            <mdc-list>
              <mdc-list-item>Single-line item</mdc-list-item>
              <mdc-list-item>Single-line item</mdc-list-item>
              <mdc-list-item>Single-line item</mdc-list-item>
            </mdc-list>
          </mdc-list-group>
          <p><br></p>
      
        </section>
      
        <section id="menu" class="doc-section">
          <mdc-headline >Menu</mdc-headline>
          <div class="doc-center">
            <mdc-menu-anchor class="myAnchor">
              <mdc-button raised @click="$refs.menu.show()">Open Menu</mdc-button>
              <span>{{ menuMessage }}</span>
              <mdc-menu ref="menu" @selected="menuSelect" @cancel="menuCancel">
                <mdc-menu-item>A Menu Item</mdc-menu-item>
                <mdc-menu-item>Another Menu Item</mdc-menu-item>
                <mdc-menu-divider>Another Menu Item</mdc-menu-divider>
                <mdc-menu-item>Parted Menu Item</mdc-menu-item>
              </mdc-menu>
            </mdc-menu-anchor>
            </div>
      </section>
      
        <section id="snackbar" class="doc-section">
          <mdc-headline>Snackbar</mdc-headline>
          <div class="doc-center">
            <mdc-button raised @click="showSnackbar">Show Snackbar</mdc-button>
            <mdc-snackbar ref="snackbar"></mdc-snackbar>
          </div>
        </section>
      
        <section id="typography" class="doc-section">
          <mdc-headline>Typography</mdc-headline>
          <div class="doc-center">
            <mdc-display typo='display4'>Display4</mdc-display>
            <mdc-display typo='display3'>Display3</mdc-display>
            <mdc-display typo='display2'>Display2</mdc-display>
            <mdc-display typo='display1'>Display1</mdc-display>
            <mdc-headline>Headline</mdc-headline>
            <mdc-title>Title <mdc-caption>Caption</mdc-caption></mdc-title>
            <mdc-subheading typo='subheading2'>Subheading2</mdc-subheading>
            <mdc-subheading typo='subheading1'>Subheading1</mdc-subheading>
            <mdc-body typo='body1'>Body1</mdc-body>
            <mdc-body typo='body2'>Body2</mdc-body>
          </div>
        </section>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'app',
  computed: {
    drawerComponent () {
      return 'mdc-' + this.drawerType.toString() + '-drawer'
    }
  },
  data () {
    return {
      image: {
        card: require('./assets/card-16-9.jpg'),
        tile: require('./assets/tile-1-1.jpg'),
        logo: require('./assets/logo.png')
      },
      sections: [],
      checked: false,
      toggle: false,
      textField: '',
      password: '',
      picked: null,
      menuMessage: '',
      drawerType: 'persistent',
      indeterminate: false
    }
  },
  mounted () {
    let vm = this
    vm.sections = []
    document.querySelectorAll('.doc-section').forEach(function (el) {
      let headline = el.querySelector('.mdc-typography--headline')
      if (headline) {
        vm.sections.push({id: el.id, text: headline.innerText})
      }
    })
  },
  methods: {
    toggleDrawer () {
      if (this.drawerType !== 'permanent') this.$refs.drawer.foundation.isOpen() ? this.$refs.drawer.close() : this.$refs.drawer.open()
    },
    switchDrawer (drawer) {
      this.drawerType = drawer
      this.$nextTick(function () { // vue updates DOM with async functions so this guarantees that the drawer is defined
        if (this.drawerType !== 'permanent') this.$refs.drawer.open()
      })
    },
    showSnackbar (event) {
      this.$root.$emit('show-snackbar', {
        message: 'This is a snackbar',
        actionText: 'action',
        actionHandler () {
          window.alert('snackbar action')
        }
      })
    },
    showDialog () {
      this.$refs.dialog.show()
    },
    menuSelect (selected) {
      this.menuMessage = `${selected.index}: ${selected.item.textContent}`
    },
    menuCancel () {
      this.menuMessage = 'Menu Canceled'
    },
    log (value) {
      console.log(value)
    },
    alert (value) {
      this.$root.$emit('show-snackbar', {
        message: value
      })
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    makeIndeterminate () {
      this.indeterminate = true
    }
  }
}
</script>

<style>

.grid {
  min-height: 50px;
  border: 1px solid;
}

.cell {
  border: 1px dashed;
}

body {
  margin:0;
  padding:0;
}

.drawer-layout {
  display: flex;
  flex-direction: row;
}

.drawer-header {
  background-image: url("./assets/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#doc {
  margin:0;
  padding:0;
}

.doc-section {
  margin: 80px auto 80px 100px;
  max-width: 820px;
}

:target:before {
  content:"";
  display:block;
  height:84px; /* fixed header height*/
  margin:-64px 0 0; /* negative fixed header height */
}

.doc-center {
  margin: auto;
  max-width: 600px;
}

#menu-icon {
  text-decoration: none;
}

</style>
