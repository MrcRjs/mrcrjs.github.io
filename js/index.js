var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portfolioData = [
{
	title: "Keras Basic Neural Network",
	subtitle: "Example for experimentation with a neural network in Keras",
	img: "https://raw.githubusercontent.com/MrcRjs/Keras-Example/master/images/operation.png",
	url: "https://github.com/MrcRjs/Keras-Example",
	dark: false
},
{
	title: "Wikipedia Viewer",
	subtitle: "Wikipedia article search",
	img: "./static/wiki.png",
	url: "http://codepen.io/MrcRjs/full/JEPPWo/",
	dark: false
}, {
	title: "Random Quote Machine",
	subtitle: "Chuck Norris random quotes",
	img: "./static/quote.png",
	url: "https://codepen.io/MrcRjs/full/jwRYaM/",
	dark: false
}, {
	title: "Weather",
	subtitle: "Weather application using weather API",
	img: "./static/weather.png",
	url: "http://codepen.io/MrcRjs/full/MeaGaZ",
	dark: false
}, {
	title: "Pomodoro",
	subtitle: "Pomodoro clock",
	img: "./static/pomodoro.png",
	url: "https://codepen.io/MrcRjs/full/YQgYvK/",
	dark: false
}, {
	title: "Jiddu Krishnamurti",
	subtitle: "Krishnamurti tribute page",
	img: "./static/tribute.png",
	url: "https://codepen.io/MrcRjs/full/xOzdLj"
}, {
	title: "Twitchtv Stream Status",
	subtitle: "Check stream status of different channels",
	img: "./static/twitch.png",
	url: "https://codepen.io/MrcRjs/full/gREpbm/",
	dark: false
}, {
	title: "Kalk",
	subtitle: "Javascript calculator",
	img: "./static/kalk.png",
	url: "http://codepen.io/MrcRjs/full/QEbVZX",
	dark: false
}];

var Navbar = function (_React$Component) {
	_inherits(Navbar, _React$Component);

	function Navbar(props) {
		_classCallCheck(this, Navbar);

		var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

		_this.propTypes = {
			brand: React.PropTypes.string.isRequired
		};

		_this.defaultProps = {
			brand: "Title",
			color: "default"
		};
		return _this;
	}

	_createClass(Navbar, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"nav",
					{
						className: "site-header fixed-top py-1",
						style: { "background-color": this.props.color || "default" }
					},
					React.createElement(
						"div",
						{ className: "container d-flex flex-column flex-md-row justify-content-between" },
						React.createElement(
							"a",
							{ "className": "py-2", href: "#" },
							React.createElement(
								"svg",
								{
									xmlns: "http://www.w3.org/2000/svg",
									width: "24",
									height: "24",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									"stroke-width": "2",
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									className: "d-block mx-auto"
								},
								React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
								React.createElement("line", { x1: "14.31", y1: "8", x2: "20.05", y2: "17.94" }),
								React.createElement("line", { x1: "9.69", y1: "8", x2: "21.17", y2: "8" }),
								React.createElement("line", { x1: "7.38", y1: "12", x2: "13.12", y2: "2.06" }),
								React.createElement("line", { x1: "9.69", y1: "16", x2: "3.95", y2: "6.06" }),
								React.createElement("line", { x1: "14.31", y1: "16", x2: "2.83", y2: "16" }),
								React.createElement("line", { x1: "16.62", y1: "12", x2: "10.88", y2: "21.94" })
							)
						),
						React.createElement(
							"a",
							{ className: "py-2 d-none d-md-inline-block", href: "#" },
							"Tour"
						),
						React.createElement(
							"a",
							{ className: "py-2 d-none d-md-inline-block", href: "#" },
							"Product"
						),
						React.createElement(
							"a",
							{ className: "py-2 d-none d-md-inline-block", href: "#" },
							"Features"
						),
						React.createElement(
							"a",
							{ className: "py-2 d-none d-md-inline-block", href: "#" },
							"Enterprise"
						)
					)
				)
			);
		}
	}]);

	return Navbar;
}(React.Component);

var Footer = React.createClass({
	displayName: "Footer",

	getDefaultProps: function getDefaultProps() {
		return {
			brand: "La Terminal, Inc.",
			year: "2018"
		};
	},
	render: function render() {
		return React.createElement(
			"footer",
			{ className: "container py-5 sticky" },
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-12 col-md" },
					React.createElement(
						"svg",
						{
							xmlns: "http://www.w3.org/2000/svg",
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							className: "d-block mb-2"
						},
						React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
						React.createElement("line", { x1: "14.31", y1: "8", x2: "20.05", y2: "17.94" }),
						React.createElement("line", { x1: "9.69", y1: "8", x2: "21.17", y2: "8" }),
						React.createElement("line", { x1: "7.38", y1: "12", x2: "13.12", y2: "2.06" }),
						React.createElement("line", { x1: "9.69", y1: "16", x2: "3.95", y2: "6.06" }),
						React.createElement("line", { x1: "14.31", y1: "16", x2: "2.83", y2: "16" }),
						React.createElement("line", { x1: "16.62", y1: "12", x2: "10.88", y2: "21.94" })
					),
					React.createElement(
						"small",
						{ className: "d-block mb-3 text-muted" },
						"\xA9 ",
						this.props.year,
						" ",
						this.props.brand
					)
				),
				React.createElement(
					"div",
					{ className: "col-6 col-md" },
					React.createElement(
						"h5",
						null,
						"Features"
					),
					React.createElement(
						"ul",
						{ className: "list-unstyled text-small" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Cool stuff"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Random feature"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Team feature"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Stuff for developers"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Another one"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Last time"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-6 col-md" },
					React.createElement(
						"h5",
						null,
						"Resources"
					),
					React.createElement(
						"ul",
						{ className: "list-unstyled text-small" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Resource"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Resource name"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Another resource"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Final resource"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-6 col-md" },
					React.createElement(
						"h5",
						null,
						"Resources"
					),
					React.createElement(
						"ul",
						{ className: "list-unstyled text-small" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Business"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Education"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Government"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Gaming"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "col-6 col-md" },
					React.createElement(
						"h5",
						null,
						"About"
					),
					React.createElement(
						"ul",
						{ className: "list-unstyled text-small" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Team"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Locations"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Privacy"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "text-muted", href: "#" },
								"Terms"
							)
						)
					)
				)
			)
		);
	}
});

var PortfolioItem = function PortfolioItem(_ref) {
	var title = _ref.title,
	    subtitle = _ref.subtitle,
	    img = _ref.img,
	    dark = _ref.dark,
	    _ref$url = _ref.url,
	    url = _ref$url === undefined ? "#" : _ref$url;

	var colorStyle = dark ? "bg-dark text-white" : "bg-medium text-white";
	return React.createElement(
		"div",
		{
			className: "mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden " + colorStyle
		},
		React.createElement(
			"div",
			{ className: "my-3 p-3" },
			React.createElement(
				"h2",
				{ className: "display-5" },
				title
			),
			React.createElement(
				"p",
				{ className: "lead" },
				subtitle
			)
		),
		React.createElement(
			"a",
			{ href: url, target: "_blank" },
			React.createElement("div", {
				className: "box-shadow mx-auto portfolio-img",
				style: {
					width: "80%",
					height: "300px",
					"max-height": "500px",
					"border-radius": "10px 10px 0 0",
					"background-image": "url(" + img + ")"
				}
			})
		)
	);
};

var Carousel = function Carousel(_ref2) {
	var title = _ref2.title;
	return React.createElement(
		"div",
		{ "data-interval": "5000", id: "portfolioCarousel", className: "carousel slide" },
		React.createElement(
			"div",
			{ className: "carousel-inner" },
			portfolioData.map(function (pItem, idx) {
				return React.createElement(
					"div",
					{ className: idx === 0 ? "carousel-item active" : "carousel-item" },
					React.createElement(PortfolioItem, pItem)
				);
			})
		),
		React.createElement(
			"a",
			{
				className: "carousel-control-prev",
				href: "#portfolioCarousel",
				role: "button",
				"data-slide": "prev"
			},
			React.createElement("span", { className: "carousel-control-prev-icon text-info", "aria-hidden": "true" }),
			React.createElement(
				"span",
				{ className: "sr-only" },
				"Previous"
			)
		),
		React.createElement(
			"a",
			{
				className: "carousel-control-next",
				href: "#portfolioCarousel",
				role: "button",
				"data-slide": "next"
			},
			React.createElement("span", { className: "carousel-control-next-icon blue", "aria-hidden": "true" }),
			React.createElement(
				"span",
				{ className: "sr-only" },
				"Next"
			)
		)
	);
};

var ComputerSVG = function ComputerSVG(_ref3) {
	var onClick = _ref3.onClick;

	return React.createElement(
		"svg",
		{
			onClick: onClick,
			xmlns: "http://www.w3.org/2000/svg",
			id: "computer-logo-svg",
			className: "computer-logo",
			xmlnsxlink: "http://www.w3.org/1999/xlink",
			version: "1.1",
			x: "0px",
			y: "0px",
			viewBox: "0 0 65 60",
			"enable-background": "new 0 0 60 60",
			xmlspace: "preserve"
		},
		React.createElement("path", {
			"data-ignore": "true",
			fill: "#000",
			className: "computer-logo-header",
			width: "40.1",
			height: "1.5",
			d: "M17.3 8.4 L57.400000000000006 8.4 L57.400000000000006 9.9 L17.3 9.9 Z"
		}),
		React.createElement("path", {
			"data-ignore": "true",
			fill: "none",
			className: "computer-logo-bmax",
			width: "1.5",
			height: "1.5",
			d: "M12.3 8.4 L13.8 8.4 L13.8 9.9 L12.3 9.9 Z"
		}),
		React.createElement("path", {
			"data-ignore": "true",
			fill: "none",
			className: "computer-logo-bmin",
			width: "1.5",
			height: "1.5",
			d: "M9 8.4 L10.5 8.4 L10.5 9.9 L9 9.9 Z"
		}),
		React.createElement("path", {
			"data-ignore": "true",
			fill: "none",
			className: "computer-logo-bclose",
			width: "1.5",
			height: "1.5",
			d: "M5.7 8.4 L7.2 8.4 L7.2 9.9 L5.7 9.9 Z"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "7.9",
			height: "1.5",
			d: "M7.5 18.2 L15.4 18.2"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M17.2 18.2 L18.7 18.2"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M20.4 18.2 L21.9 18.2"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "4.8",
			height: "1.5",
			d: "M7.5 22.8 L12.3 22.8"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "2.9",
			height: "1.5",
			d: "M14.1 22.8 L17 22.8"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "11.1",
			height: "1.5",
			d: "M18.9 22.8 L30 22.8"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "7.6",
			height: "1.5",
			d: "M17 27.5 L24.6 27.5"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M26.3 27.5 L27.8 27.5"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M29.5 27.5 L31 27.5"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M32.7 27.5 L34.2 27.5"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M35.9 27.5 L37.4 27.5"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "18.5",
			height: "1.5",
			d: "M38.9 27.5 L57.4 27.5"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "5.8",
			height: "1.5",
			d: "M17 32.1 L22.8 32.1"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "14.7",
			height: "1.5",
			d: "M24.5 32.1 L39.2 32.1"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M41.2 32.1 L42.7 32.1"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M44.4 32.1 L45.9 32.1"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "9.8",
			height: "1.5",
			d: "M47.7 32.1 L57.5 32.1"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M7.5 36.8 L9 36.8"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M10.7 36.8 L12.2 36.8"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "1.5",
			height: "1.5",
			d: "M13.9 36.8 L15.4 36.8"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "11.3",
			height: "1.5",
			d: "M17.2 36.8 L28.5 36.8"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "6.2",
			height: "1.5",
			d: "M30.3 36.8 L36.5 36.8"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "17.1",
			height: "1.5",
			d: "M7.5 41.5 L24.6 41.5"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "10.9",
			height: "1.5",
			d: "M26.6 41.5 L37.5 41.5"
		}),
		React.createElement("path", {
			stroke: "#000",
			fill: "none",
			className: "computer-logo-lines",
			width: "5.6",
			height: "1.5",
			d: "M39.3 41.5 L44.9 41.5"
		}),
		React.createElement("path", {
			"data-ignore": "true",
			fill: "#000",
			className: "computer-logo-main",
			d: "M62.5,4.6h-60C1,4.6-0.2,5.8-0.2,7.3v43.2c0,1.5,1.2,2.8,2.8,2.8h21.1v5.7h-4.5v1.5h26.8v-1.5h-4.5v-5.7h21.1   c1.5,0,2.8-1.2,2.8-2.8V7.3C65.3,5.8,64,4.6,62.5,4.6z M39.9,58.9H25.1v-5.7h14.8V58.9z M63.8,50.5c0,0.7-0.6,1.3-1.3,1.3h-60   c-0.7,0-1.2-0.6-1.2-1.3v-1.9h62.5V50.5z M63.8,47.1H1.3V13.3h62.5V47.1z M63.8,11.8H1.3V7.3c0-0.7,0.6-1.3,1.2-1.3h60   c0.7,0,1.3,0.6,1.3,1.3V11.8z"
		})
	);
};

var ContactForm = function ContactForm() {
	return React.createElement(
		"div",
		{ className: "pt-5" },
		React.createElement(
			"div",
			{ className: "col-xs-12 col-md-8 offset-md-2" },
			React.createElement(
				"h3",
				{ style: { color: "white" } },
				"Get in Touch"
			),
			React.createElement(
				"form",
				{ method: "POST", action: "https://formspree.io/devmarcorojas@gmail.com" },
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement("input", {
						type: "hidden",
						name: "_subject",
						value: "Contact request from portfolio page"
					}),
					React.createElement("input", {
						className: "form-control",
						id: "contactEmail",
						type: "email",
						name: "_replyto",
						placeholder: "Your email",
						required: true
					})
				),
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement("textarea", {
						className: "form-control",
						name: "message",
						placeholder: "Your message",
						required: true
					})
				),
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement(
						"button",
						{ className: "btn btn-secondary btn-block", type: "submit" },
						"Send"
					)
				)
			)
		)
	);
};

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return {
			currentPage: "home",
			progress: 30,
			bgColor: "rgba(0, 0, 0, .85)"
		};
		this.handleProgress = this.handleProgress.bind(this);
		this.restartComputerAnim = this.restartComputerAnim.bind(this);
		this.handleCarouselColor = this.handleCarouselColor.bind(this);
	},

	handleProgress: function handleProgress() {
		var RandColor = randomColor({
			luminosity: "light"
		});
		this.setState({
			progress: Math.random() * 100 + 1,
			progColor: RandColor
		});
	},

	restartComputerAnim: function restartComputerAnim() {
		if (this.state.computerLogo.getStatus() === "end") {
			this.state.computerLogo.reset();
			this.state.computerLogo.play();
		}
	},
	handleCarouselColor: function handleCarouselColor() {
		var RandColor = randomColor({
			hue: "#2665a9",
			//luminosity: "dark",
			format: "rgba",
			alpha: 0.85
		});
		this.setState({ bgColor: RandColor });
	},
	componentDidMount: function componentDidMount() {
		var _this2 = this;

		var ComputerLogoVivus = new Vivus("computer-logo-svg", {
			duration: 150,
			type: "oneByOne"
		});
		this.setState({ computerLogo: ComputerLogoVivus }, function () {
			return _this2.state.computerLogo.play();
		});

		$("#portfolioCarousel").on("slide.bs.carousel", function () {
			return _this2.handleCarouselColor();
		});
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "main" },
			React.createElement(
				"header",
				null,
				React.createElement(Navbar, {
					brand: "Animations",
					activePage: this.state.currentPage,
					color: this.state.bgColor
				})
			),
			React.createElement(
				"main",
				{ role: "main", className: "main page-row-expanded" },
				React.createElement(
					"div",
					{ className: "container" },
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col-xm-12 col-md-8 mt-3" },
							React.createElement(
								"h1",
								null,
								"Marco Rojas"
							)
						)
					),
					React.createElement("br", null),
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"div",
							{ className: "row align-items-center" },
							React.createElement(
								"div",
								{ className: "col-md-4 col-6 offset-3 offset-md-0" },
								React.createElement(ComputerSVG, { onClick: this.restartComputerAnim })
							),
							React.createElement(
								"div",
								{ className: "col-md-8" },
								React.createElement(
									"p",
									{ className: "lead text-justify" },
									"Motivated programmer with experience building web and mobile applications, based in",
									" ",
									React.createElement(
										"strong",
										null,
										React.createElement(
											"a",
											{
												className: "location",
												target: "_blank",
												href: "https://www.google.com.mx/maps/search/76F32RR2%2B8G"
											},
											"76F32RR2+8G"
										)
									)
								)
							)
						)
					)
				),
				React.createElement(
					"div",
					{
						style: { "background-color": this.state.bgColor },
						className: "carouselContainer px-sm-5 px-0 mt-3"
					},
					React.createElement(
						"div",
						{ className: "col-lg-10 offset-lg-1 px-0 py-3" },
						React.createElement(Carousel, null),
						React.createElement(ContactForm, null)
					)
				)
			),
			React.createElement(Footer, { brand: "Made with \uD83C\uDF7B by Marco A. Rojas" })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
