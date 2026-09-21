<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStockMovementRequest;
use Illuminate\Http\Request;

class StockMovementController extends Controller
{
     public function store(  StoreStockMovementRequest $request,
        StockMovementServic $service
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
