<!DOCTYPE html>
<html>
<head>
	<title>Check In App @yield('title')</title>
	@include('layout.head')
</head>
<body>
	@include('layout.header')
	
	<div class="container">
		@section('content')
		@show
	</div>

	@include('layout.footer')

	@yield('js')
</body>
</html>