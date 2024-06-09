<?php

use App\Http\Controllers\Api\ProductController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//----------------------------------- Product -----------------------------//
Route::apiResource('products', ProductController::class);
//
// Lấy danh sách sản phẩm
// Route::get('products', 'ProductController@index')->name('products.index');

// Lấy thông tin sản phẩm theo id
// Route::get('products/{id}', 'Api\ProductController@show')->name('products.show');

// Thêm sản phẩm mới
// Route::post('products', 'Api\ProductController@store')->name('products.store');

// Cập nhật thông tin sản phẩm theo id
// # Sử dụng put nếu cập nhật toàn bộ các trường
// Route::put('products/{id}', 'Api\ProductController@update')->name('products.update');
// # Sử dụng patch nếu cập nhật 1 vài trường
// Route::patch('products/{id}', 'Api\ProductController@update')->name('products.update');

// Xóa sản phẩm theo id
// Route::delete('products/{id}', 'Api\ProductController@destroy')->name('products.destroy');
