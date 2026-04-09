<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de tareas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center">Lista de tareas</h2>
        
        <?php
        session_start();
        if (!isset($_SESSION['tareas'])) {
            $_SESSION['tareas'] = [];
        }

        if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['nueva_tarea'])) {
            $nueva_tarea = trim($_POST['nueva_tarea']);
            if (!empty($nueva_tarea)) {
                $_SESSION['tareas'][] = $nueva_tarea;
            }
        }

        if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['eliminar'])) {
            $indice = $_POST['eliminar'];
            unset($_SESSION['tareas'][$indice]);
            $_SESSION['tareas'] = array_values($_SESSION['tareas']);
        }
        ?>

        <form method="post" class="mb-3">
            <div class="input-group">
                <input type="text" name="nueva_tarea" class="form-control" placeholder="Nueva tarea..." required>
                <button type="submit" class="btn btn-primary">Agregar</button>
            </div>
        </form>

        <?php if (!empty($_SESSION['tareas'])): ?>
            <ul class="list-group">
                <?php foreach ($_SESSION['tareas'] as $indice => $tarea): ?>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <?php echo htmlspecialchars($tarea); ?>
                        <form method="post" class="d-inline">
                            <button type="submit" name="eliminar" value="<?php echo $indice; ?>" class="btn btn-danger btn-sm">Eliminar</button>
                        </form>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php else: ?>
            <div class="alert alert-info mt-3">No hay tareas en la lista.</div>
        <?php endif; ?>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
