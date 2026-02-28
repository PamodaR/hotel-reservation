import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, User, Mail, Lock, Shield, Phone, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Register = ({ publicMode = false, onlyCustomer = false }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        documentType: 'ID', // kept for backend compatibility
        documentId: '',
        role: 'USER',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                alert('Registration successful!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    documentType: 'ID',
                    documentId: '',
                    role: 'USER',
                    password: '',
                    confirmPassword: ''
                });

                if (publicMode) {
                    navigate('/login');
                } else {
                    navigate('/members');
                }
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError('Unable to connect to server. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-6 ${publicMode ? 'relative' : 'bg-surface-50'}`}>
            
            {/* Background Image for Public Mode */}
            {publicMode && (
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Ocean View Resort"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm"></div>
                </div>
            )}

            <Card className={`w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/20 relative z-10 ${!publicMode ? 'border-surface-200 shadow-lg' : ''}`}>
                <CardHeader className="text-center border-none pb-0">
                    <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                        <UserPlus className="w-8 h-8 text-primary-600" />
                    </div>
                    <CardTitle className="text-3xl font-serif text-primary-900">
                        {publicMode || onlyCustomer 
                            ? (publicMode ? 'Join Ocean View' : 'Register Customer') 
                            : 'Register New User'}
                    </CardTitle>
                    <p className="text-surface-600 mt-2">
                        {publicMode || onlyCustomer 
                            ? 'Create account to unlock exclusive rates.' 
                            : 'Create a new account for staff or guests.'}
                    </p>
                </CardHeader>

                <CardContent className="pt-8">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg flex items-start animate-shake">
                            <div className="flex-1">
                                <p className="text-sm text-red-700 font-medium">Registration Error</p>
                                <p className="text-xs text-red-600 mt-1">{error}</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-6">

                        <div className="grid md:grid-cols-2 gap-6">
                            <Input
                                label="Full Name"
                                name="name"
                                icon={User}
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                label="Email Address"
                                type="email"
                                name="email"
                                icon={Mail}
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Contact & NIC Details */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Input
                                label="Phone Number"
                                type="tel"
                                name="phone"
                                icon={Phone}
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            {/* NIC Only (Dropdown Removed) */}
                            <div>
                                <label className="block text-sm font-medium text-surface-700 mb-2">
                                    ID/Passport
                                </label>
                                <div className="relative">
                                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-4 h-4 pointer-events-none" />
                                    <input
                                        type="text"
                                        name="documentId"
                                        value={formData.documentId}
                                        onChange={handleChange}
                                        placeholder="ID Number"
                                        className="w-full pl-9 pr-4 py-3 bg-white/50 border border-surface-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 text-surface-900 placeholder-surface-400"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Admin Role Selection */}
                        {!publicMode && !onlyCustomer && (
                            <div>
                                <label className="block text-sm font-medium text-surface-700 mb-2">
                                    User Role
                                </label>
                                <div className="relative">
                                    <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 w-5 h-5 pointer-events-none" />
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-4 py-3 bg-white/50 border border-surface-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 text-surface-900 appearance-none"
                                    >
                                        <option value="USER">Guest</option>
                                        <option value="STAFF">Staff Member</option>
                                        <option value="ADMIN">Admin</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                icon={Lock}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                icon={Lock}
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/30"
                            isLoading={loading}
                        >
                            <UserPlus className="w-5 h-5 mr-2" />
                            {publicMode || onlyCustomer 
                                ? 'Register Customer' 
                                : 'Create Staff Account'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;