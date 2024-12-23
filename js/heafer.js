const header = ```
<header>
	<div class="container">
		<div class="logo">
			<a href="/index.html">
				<img src="/media/logo.svg" alt="Логотип" />
			</a>
		</div>
		<nav>
			<div class="menu-toggle" id="menuToggle">
				<img src="media/burger.svg" alt="Бургер меню" />
			</div>
			<ul class="menu" id="menu">
				<li>
					<a href="/about.html">О бренде</a>
				</li>
				<li>
					<a href="/products.html">Продукция</a>
				</li>
				<li>
					<a href="/contacts.html">Контакты</a>
				</li>
				<li>
					<a href="/news.html">Новости</a>
				</li>
			</ul>
		</nav>
	</div>
</header>;
```;

document.body.innerHTML += header;
