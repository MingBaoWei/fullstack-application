'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">double-cook documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-1f94042e69c5c17960795b527fe484230f8344da6824338ee9652769cdd671593d03538a46103b8c2e6b3c99f4266d6bf6b91a59493ea94221161efc02e9a545"' : 'data-bs-target="#xs-components-links-module-AppModule-1f94042e69c5c17960795b527fe484230f8344da6824338ee9652769cdd671593d03538a46103b8c2e6b3c99f4266d6bf6b91a59493ea94221161efc02e9a545"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1f94042e69c5c17960795b527fe484230f8344da6824338ee9652769cdd671593d03538a46103b8c2e6b3c99f4266d6bf6b91a59493ea94221161efc02e9a545"' :
                                            'id="xs-components-links-module-AppModule-1f94042e69c5c17960795b527fe484230f8344da6824338ee9652769cdd671593d03538a46103b8c2e6b3c99f4266d6bf6b91a59493ea94221161efc02e9a545"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AutenticacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutenticacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComentariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComentariosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MisReservasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MisReservasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicacionesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicacionesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerComentariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerComentariosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComentariosService.html" data-type="entity-link" >ComentariosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuCategoriaServiceService.html" data-type="entity-link" >MenuCategoriaServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublicacionesService.html" data-type="entity-link" >PublicacionesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReservasService.html" data-type="entity-link" >ReservasService</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});