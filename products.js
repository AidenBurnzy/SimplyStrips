// Sleep Strip Popup Modal Logic
function initializeProductPopups() {

		// Helper to close all popups
		function closeAllPopups() {
			document.querySelectorAll('.product-popup-overlay').forEach(p => p.style.display = 'none');
			document.body.classList.remove('popup-open');
		}

		// Modal configs for each product
		const modals = [
			{
				btn: document.querySelector('.sleep-card .buy-button'),
				overlay: document.getElementById('sleep-popup-overlay'),
				close: document.getElementById('sleep-popup-close'),
				shopify: function() {
					if (!window.ShopifyBuyInitLoaded_sleep) {
						window.ShopifyBuyInitLoaded_sleep = true;
						(function () {
							var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
							if (window.ShopifyBuy) {
								if (window.ShopifyBuy.UI) {
									ShopifyBuyInit();
								} else {
									loadScript();
								}
							} else {
								loadScript();
							}
							function loadScript() {
								var script = document.createElement('script');
								script.async = true;
								script.src = scriptURL;
								(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
								script.onload = ShopifyBuyInit;
							}
							function ShopifyBuyInit() {
								var client = ShopifyBuy.buildClient({
									domain: 'nfeea3-me.myshopify.com',
									storefrontAccessToken: 'af3f2b8c1dd9026403ebb8126185888c',
								});
								ShopifyBuy.UI.onReady(client).then(function (ui) {
									ui.createComponent('product', {
										id: '9994776740122',
										node: document.getElementById('product-component-1758433275553'),
										moneyFormat: '%24%7B%7Bamount%7D%7D',
										options: {
											"product": {
												"styles": {
													"product": {
														"@media (min-width: 601px)": {
															"max-width": "calc(25% - 20px)",
															"margin-left": "20px",
															"margin-bottom": "50px"
														}
													},
													"button": {
														"font-family": "Arial, sans-serif",
														"font-size": "18px",
														"padding-top": "17px",
														"padding-bottom": "17px",
														":hover": {
															"background-color": "#e086c2"
														},
														"background-color": "#f995d8",
														":focus": {
															"background-color": "#e086c2"
														}
													},
													"quantityInput": {
														"font-size": "18px",
														"padding-top": "17px",
														"padding-bottom": "17px"
													}
												},
												"buttonDestination": "modal",
												"contents": {
													"options": false
												},
												"text": {
													"button": "View product"
												}
											},
											"productSet": {
												"styles": {
													"products": {
														"@media (min-width: 601px)": {
															"margin-left": "-20px"
														}
													}
												}
											},
											"modalProduct": {
												"contents": {
													"img": false,
													"imgWithCarousel": true,
													"button": false,
													"buttonWithQuantity": true
												},
												"styles": {
													"product": {
														"@media (min-width: 601px)": {
															"max-width": "100%",
															"margin-left": "0px",
															"margin-bottom": "0px"
														}
													},
													"button": {
														"font-family": "Arial, sans-serif",
														"font-size": "18px",
														"padding-top": "17px",
														"padding-bottom": "17px",
														":hover": {
															"background-color": "#e086c2"
														},
														"background-color": "#f995d8",
														":focus": {
															"background-color": "#e086c2"
														}
													},
													"quantityInput": {
														"font-size": "18px",
														"padding-top": "17px",
														"padding-bottom": "17px"
													}
												},
												"text": {
													"button": "Add to cart"
												}
											},
											"option": {},
											"cart": {
												"styles": {
													"button": {
														"font-family": "Arial, sans-serif",
														"font-size": "18px",
														"padding-top": "17px",
														"padding-bottom": "17px",
														":hover": {
															"background-color": "#e086c2"
														},
														"background-color": "#f995d8",
														":focus": {
															"background-color": "#e086c2"
														}
													}
												},
												"text": {
													"total": "Subtotal",
													"button": "Checkout"
												}
											},
											"toggle": {
												"styles": {
													"toggle": {
														"font-family": "Arial, sans-serif",
														"background-color": "#f995d8",
														":hover": {
															"background-color": "#e086c2"
														},
														":focus": {
															"background-color": "#e086c2"
														}
													},
													"count": {
														"font-size": "18px"
													}
												}
											}
										},
									});
								});
							}
						})();
					}
				}
			},
				{
					btn: document.querySelector('.energy-card .buy-button'),
					overlay: document.getElementById('energy-popup-overlay'),
					close: document.getElementById('energy-popup-close'),
					shopify: function() {
						if (!window.ShopifyBuyInitLoaded_energy) {
							window.ShopifyBuyInitLoaded_energy = true;
							(function () {
								var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
								if (window.ShopifyBuy) {
									if (window.ShopifyBuy.UI) {
										ShopifyBuyInit();
									} else {
										loadScript();
									}
								} else {
									loadScript();
								}
								function loadScript() {
									var script = document.createElement('script');
									script.async = true;
									script.src = scriptURL;
									(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
									script.onload = ShopifyBuyInit;
								}
								function ShopifyBuyInit() {
									var client = ShopifyBuy.buildClient({
										domain: 'nfeea3-me.myshopify.com',
										storefrontAccessToken: 'af3f2b8c1dd9026403ebb8126185888c',
									});
									ShopifyBuy.UI.onReady(client).then(function (ui) {
										ui.createComponent('product', {
											id: '9995732123930',
											node: document.getElementById('product-component-1758434059889'),
											moneyFormat: '%24%7B%7Bamount%7D%7D',
											options: {
												"product": {
													"styles": {
														"product": {
															"@media (min-width: 601px)": {
																"max-width": "calc(25% - 20px)",
																"margin-left": "20px",
																"margin-bottom": "50px"
															}
														},
														"button": {
															"font-family": "Arial, sans-serif",
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px",
															":hover": {
																"background-color": "#e45151"
															},
															"background-color": "#fd5a5a",
															":focus": {
																"background-color": "#e45151"
															}
														},
														"quantityInput": {
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px"
														}
													},
													"buttonDestination": "modal",
													"contents": {
														"options": false
													},
													"width": "580px",
													"text": {
														"button": "View product"
													}
												},
												"productSet": {
													"styles": {
														"products": {
															"@media (min-width: 601px)": {
																"margin-left": "-20px"
															}
														}
													}
												},
												"modalProduct": {
													"contents": {
														"img": false,
														"imgWithCarousel": true,
														"button": false,
														"buttonWithQuantity": true
													},
													"styles": {
														"product": {
															"@media (min-width: 601px)": {
																"max-width": "100%",
																"margin-left": "0px",
																"margin-bottom": "0px"
															}
														},
														"button": {
															"font-family": "Arial, sans-serif",
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px",
															":hover": {
																"background-color": "#e45151"
															},
															"background-color": "#fd5a5a",
															":focus": {
																"background-color": "#e45151"
															}
														},
														"quantityInput": {
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px"
														},
														"title": {
															"font-size": "34px"
														},
														"price": {
															"font-size": "26px"
														},
														"compareAt": {
															"font-size": "22.099999999999998px"
														},
														"unitPrice": {
															"font-size": "22.099999999999998px"
														}
													},
													"text": {
														"button": "Add to cart"
													}
												},
												"option": {},
												"cart": {
													"styles": {
														"button": {
															"font-family": "Arial, sans-serif",
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px",
															":hover": {
																"background-color": "#e45151"
															},
															"background-color": "#fd5a5a",
															":focus": {
																"background-color": "#e45151"
															}
														}
													},
													"text": {
														"total": "Subtotal",
														"button": "Checkout"
													}
												},
												"toggle": {
													"styles": {
														"toggle": {
															"font-family": "Arial, sans-serif",
															"background-color": "#fd5a5a",
															":hover": {
																"background-color": "#e45151"
															},
															":focus": {
																"background-color": "#e45151"
															}
														},
														"count": {
															"font-size": "18px"
														}
													}
												}
											},
										});
									});
								}
							})();
						}
					}
				},
				{
					btn: document.querySelector('.recovery-card .buy-button'),
					overlay: document.getElementById('recovery-popup-overlay'),
					close: document.getElementById('recovery-popup-close'),
					shopify: function() {
						if (!window.ShopifyBuyInitLoaded_recovery) {
							window.ShopifyBuyInitLoaded_recovery = true;
							(function () {
								var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
								if (window.ShopifyBuy) {
									if (window.ShopifyBuy.UI) {
										ShopifyBuyInit();
									} else {
										loadScript();
									}
								} else {
									loadScript();
								}
								function loadScript() {
									var script = document.createElement('script');
									script.async = true;
									script.src = scriptURL;
									(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
									script.onload = ShopifyBuyInit;
								}
								function ShopifyBuyInit() {
									var client = ShopifyBuy.buildClient({
										domain: 'nfeea3-me.myshopify.com',
										storefrontAccessToken: 'af3f2b8c1dd9026403ebb8126185888c',
									});
									ShopifyBuy.UI.onReady(client).then(function (ui) {
										ui.createComponent('product', {
											id: '9995731730714',
											node: document.getElementById('product-component-1758434000317'),
											moneyFormat: '%24%7B%7Bamount%7D%7D',
											options: {
												"product": {
													"styles": {
														"product": {
															"@media (min-width: 601px)": {
																"max-width": "calc(25% - 20px)",
																"margin-left": "20px",
																"margin-bottom": "50px"
															}
														},
														"button": {
															"font-family": "Arial, sans-serif",
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px",
															":hover": {
																"background-color": "#e6c81e"
															},
															"background-color": "#ffde21",
															":focus": {
																"background-color": "#e6c81e"
															}
														},
														"quantityInput": {
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px"
														}
													},
													"buttonDestination": "modal",
													"contents": {
														"options": false
													},
													"width": "580px",
													"text": {
														"button": "View product"
													}
												},
												"productSet": {
													"styles": {
														"products": {
															"@media (min-width: 601px)": {
																"margin-left": "-20px"
															}
														}
													}
												},
												"modalProduct": {
													"contents": {
														"img": false,
														"imgWithCarousel": true,
														"button": false,
														"buttonWithQuantity": true
													},
													"styles": {
														"product": {
															"@media (min-width: 601px)": {
																"max-width": "100%",
																"margin-left": "0px",
																"margin-bottom": "0px"
															}
														},
														"button": {
															"font-family": "Arial, sans-serif",
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px",
															":hover": {
																"background-color": "#e6c81e"
															},
															"background-color": "#ffde21",
															":focus": {
																"background-color": "#e6c81e"
															}
														},
														"quantityInput": {
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px"
														},
														"title": {
															"font-size": "34px"
														},
														"price": {
															"font-size": "26px"
														},
														"compareAt": {
															"font-size": "22.099999999999998px"
														},
														"unitPrice": {
															"font-size": "22.099999999999998px"
														}
													},
													"text": {
														"button": "Add to cart"
													}
												},
												"option": {},
												"cart": {
													"styles": {
														"button": {
															"font-family": "Arial, sans-serif",
															"font-size": "18px",
															"padding-top": "17px",
															"padding-bottom": "17px",
															":hover": {
																"background-color": "#e6c81e"
															},
															"background-color": "#ffde21",
															":focus": {
																"background-color": "#e6c81e"
															}
														}
													},
													"text": {
														"total": "Subtotal",
														"button": "Checkout"
													}
												},
												"toggle": {
													"styles": {
														"toggle": {
															"font-family": "Arial, sans-serif",
															"background-color": "#ffde21",
															":hover": {
																"background-color": "#e6c81e"
															},
															":focus": {
																"background-color": "#e6c81e"
															}
														},
														"count": {
															"font-size": "18px"
														}
													}
												}
											},
										});
									});
								}
							})();
						}
					}
				}
		];

		// Attach modal logic for each product
		modals.forEach(({btn, overlay, close, shopify}) => {
			if (!btn || !overlay || !close) return;
			btn.addEventListener('click', function() {
				closeAllPopups();
				overlay.style.display = 'flex';
				document.body.classList.add('popup-open');
				shopify();
			});
			close.addEventListener('click', closeAllPopups);
			overlay.addEventListener('click', function(e) {
				if (e.target === overlay) closeAllPopups();
			});
		});
		// Close on Escape key
		document.addEventListener('keydown', function(e) {
			if (document.body.classList.contains('popup-open') && e.key === 'Escape') closeAllPopups();
		});
	}
// Expose for dynamic loader
window.initializeProductPopups = initializeProductPopups;
