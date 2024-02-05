import { createContainer, Lifetime, asClass, InjectionMode } from 'awilix';
import LoggerService from './logger.service';

interface ICradle {
    loggerService: LoggerService,
}

export default async function initializeContainer() {
    const container = createContainer<ICradle>({
        injectionMode: InjectionMode.PROXY,
        strict: true,
    });

    container.register({
        loggerService: asClass(LoggerService, { lifetime: Lifetime.SINGLETON })
    });

    return container;
}
