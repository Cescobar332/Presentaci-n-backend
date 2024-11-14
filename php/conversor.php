<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de moneda</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center">Conversor de pesos colombianos</h2>
        <form method="post" class="mt-4">
            <div class="mb-3">
                <input type="number" class="form-control" name="cantidad" placeholder="Cantidad en COP" required>
            </div>
            <div class="mb-3">
                <select class="form-select" name="moneda" required>
                    <option value="USD">Dólares (USD)</option>
                    <option value="EUR">Euros (EUR)</option>
                    <option value="INR">Rupias (INR)</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary w-100">Convertir</button>
        </form>

        <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $cantidad = $_POST['cantidad'];
            $moneda = $_POST['moneda'];
            $resultado = 0;

            $tasa_usd = 0.00027;
            $tasa_eur = 0.00023;
            $tasa_inr = 0.022;

            switch ($moneda) {
                case 'USD':
                    $resultado = $cantidad * $tasa_usd;
                    break;
                case 'EUR':
                    $resultado = $cantidad * $tasa_eur;
                    break;
                case 'INR':
                    $resultado = $cantidad * $tasa_inr;
                    break;
                default:
                    $resultado = 'Moneda no válida';
                    break;
            }

            echo "<div class='mt-4 alert alert-info'>Resultado: <strong>$resultado $moneda</strong></div>";
        }
        ?>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
