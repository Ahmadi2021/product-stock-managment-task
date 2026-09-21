<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStockMovementRequest;
use App\Http\Resources\ProductMovementHistoryResource;
use App\Models\Product;
use App\Services\StockMovementService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StockMovementController extends Controller
{
    public function store(
        StoreStockMovementRequest $request,
        StockMovementService $service
    ): JsonResponse {
        $tenantId = $request->attributes->get('tenant_id');

        $movement = $service->create(
            $request->validated(),
            $tenantId
        );

        return response()->json([
            'message' => 'Stock movement created successfully.',
            'data' => $movement,
        ]);
    }

    public function history(Request $request,string $sku){

        $product = Product::where('sku', $sku)->first();
        if (!$product) {
            return response()->json([
                'message' => 'Product not found.',
            ], 404);
        }
        $movements = $product
            ->stockMovements()
            ->latest('created_at')
            ->paginate($request->per_page ?? 20);

            return ProductMovementHistoryResource::collection($movement);
            

    }
}
