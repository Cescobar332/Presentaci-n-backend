<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center">Calculadora en PHP</h2>
        <form method="post" class="mt-4">
            <div class="row mb-3">
                <div class="col">
                    <input type="number" class="form-control" name="numero1" placeholder="Número 1" required>
                </div>
                <div class="col">
                    <input type="number" class="form-control" name="numero2" placeholder="Número 2" required>
                </div>
            </div>
            <div class="mb-3">
                <select class="form-select" name="operacion" required>
                    <option value="suma">Suma</option>
                    <option value="resta">Resta</option>
                    <option value="multiplicacion">Multiplicación</option>
                    <option value="division">División</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary w-100">Calcular</button>
        </form>

        <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $numero1 = $_POST['numero1'];
            $numero2 = $_POST['numero2'];
            $operacion = $_POST['operacion'];
            $resultado = '';

            switch ($operacion) {
                case 'suma':
                    $resultado = $numero1 + $numero2;
                    break;
                case 'resta':
                    $resultado = $numero1 - $numero2;
                    break;
                case 'multiplicacion':
                    $resultado = $numero1 * $numero2;
                    break;
                case 'division':
                    if ($numero2 != 0) {
                        $resultado = $numero1 / $numero2;
                    } else {
                        $resultado = 'Error: División por cero';
                    }
                    break;
                default:
                    $resultado = 'Operación no válida';
                    break;
            }

            echo "<div class='mt-4 alert alert-info'>Resultado: <strong>$resultado</strong></div>";
        }
        ?>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
