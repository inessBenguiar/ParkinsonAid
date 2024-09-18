import React, { useState } from 'react';
import Nav from '../components/Nav';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';  // Import de la traduction
import "./Upload.css";

function Upload() {
    const { t } = useTranslation();  // Utilisation du hook de traduction
    const [isConnected, setIsConnected] = useState(true);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const userProfile = {
        name: 'John Doe',
        image: 'https://via.placeholder.com/40',
    };

    const handleLogout = () => {
        setIsConnected(false);
    };

    // Gestion du dépôt de fichiers
    const onDrop = (acceptedFiles) => {
        const newFiles = acceptedFiles.map(file => ({
            name: file.name,
            status: 'uploading', // Statut initial
            preview: URL.createObjectURL(file),
        }));

        // Simuler le téléchargement de fichiers et mise à jour du statut
        setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
        setTimeout(() => {
            const updatedFiles = newFiles.map(file => ({
                ...file,
                status: Math.random() > 0.2 ? 'uploaded' : 'failed', // Simuler un succès ou un échec aléatoire
            }));
            setUploadedFiles(prevFiles => prevFiles.map(file => {
                const updatedFile = updatedFiles.find(f => f.name === file.name);
                return updatedFile || file;
            }));
        }, 2000); // Simuler un téléchargement de 2 secondes
    };

    // Gestion de la suppression des fichiers
    const handleDelete = (fileName) => {
        setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/jpeg, image/png' });

    return (
        <div className="upload-page">
            <Nav userProfile={isConnected ? userProfile : null} handleLogout={handleLogout} />

            {/* Titre de la page */}
            <h2 className="upload-title">{t('upload.title')}</h2>

            {/* Zone de dépôt de fichiers */}
            <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>{t('upload.dropzoneInstruction')}</p>
                <p>{t('upload.dropzoneSupportedFormats')}</p>
            </div>

            {/* Calculer le nombre total de tentatives de téléchargement */}
            <div className="upload-progress">
                <h3>
                    {t('upload.uploadProgress.attempted')}{uploadedFiles.length}{t('upload.uploadProgress.attemptedtwo')}
                    ({t('upload.uploadProgress.uploaded')}{uploadedFiles.filter(file => file.status === 'uploaded').length}, 
                    {t('upload.uploadProgress.failed')}{uploadedFiles.filter(file => file.status === 'failed').length})
                </h3>

                {uploadedFiles.map((file, index) => (
                    <div key={index} className={`upload-item ${file.status}`}>
                        <p>{file.name}</p>
                        {file.status === 'uploading' && <progress value="50" max="100" />}
                        {file.status === 'uploaded' && <span className="status uploaded">{t('upload.status.uploaded')}</span>}
                        {file.status === 'failed' && <span className="status failed">{t('upload.status.failed')}</span>}
                        <button onClick={() => handleDelete(file.name)} className="delete-btn">{t('upload.deleteButton')}</button>
                    </div>
                ))}
            </div>

            {/* Bouton Afficher la prédiction */}
            <button className="show-prediction-btn">{t('upload.showPredictionButton')}</button>
        </div>
    );
}

export default Upload;
